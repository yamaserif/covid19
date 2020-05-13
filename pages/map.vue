<template>
  <div class="Map">
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
    />
    <h2 class="Map-Heading">
      {{ $t('感染マップ') }}
      <span class="UpdatedAt">
        <span>{{ $t('最終更新') }} {{ lastUpdate }}</span>
      </span>
    </h2>
    <StaticCard>
      <div class="map-wrap">
        <no-ssr>
          <l-map
            ref="map"
            :zoom="mapOptions.zoom"
            :min-zoom="mapOptions.minZoom"
            :max-zoom="mapOptions.maxZoom"
            :center="mapOptions.center"
          >
            <l-tile-layer :url="tile.url" :attribution="tile.attribution" />
            <l-geo-json :geojson="geojson" :options="geojsonOptions" />
          </l-map>
        </no-ssr>
      </div>
      <h4>未分類地域</h4>
      <table class="table-style">
        <tr>
          <th>所在地名</th>
          <th>感染者発生数</th>
        </tr>
        <tr v-for="(value, key) in remainderData" :key="key">
          <td>{{ value.name }}</td>
          <td>{{ value.infectionPersonCount }}人</td>
        </tr>
      </table>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import dayjs from 'dayjs'
import StaticCard from '@/components/StaticCard.vue'
import MapGeojson from '@/static/yamagata_map.geojson.json'
import Data from '@/data/data.json'
import MapCityName from '@/data/mapCityName.json'

export default Vue.extend({
  components: {
    StaticCard
  },
  data() {
    const dataObject: any = {
      tile: {
        url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
        attribution: `<a href='https://maps.gsi.go.jp/development/ichiran.html'>国土地理院</a>(ズームレベル2～8:Shoreline data is derived from: United States. National Imagery and Mapping Agency. "Vector Map Level 0 (VMAP0)." Bethesda, MD: Denver, CO: The Agency; USGS Information Services, 1997.), <a href='http://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-v2_3.html'>行政区域データ出典「国土数値情報」</a>`
      },
      mapOptions: {
        zoom: 9,
        minZoom: 2,
        maxZoom: 18,
        center: [38.475, 140]
      },
      geojson: MapGeojson,
      geojsonOptions: {},
      lastUpdate: '',
      remainderData: []
    }
    return dataObject
  },
  mounted() {
    this.lastUpdate = this.getLastUpdate()
    this.setInfectionPersonCountData()
  },
  methods: {
    getLastUpdate() {
      const dataDate = Data.patients.date
      const mapCityNameDate = MapCityName.lastUpdate
      return dayjs(dataDate).isAfter(dayjs(mapCityNameDate))
        ? dataDate
        : mapCityNameDate
    },
    getInfectionPersonCount() {
      const infectionPersonCount: any = {}
      Data.patients.data.forEach((infectionPerson: any) => {
        const residence = infectionPerson['居住地']
        if (infectionPersonCount[residence]) {
          infectionPersonCount[residence]++
        } else {
          infectionPersonCount[residence] = 1
        }
      })
      // 一応市町村名でのチェックで問題ないとは思うが、表記揺れを考えて別名用のjsonを定義しておく。
      // [{ announcementName: "発表された市町村名", mapName: "地図に定義された市町村名" }]
      MapCityName.data.forEach((cityName: any) => {
        if (
          infectionPersonCount[cityName.announcementName] ||
          infectionPersonCount[cityName.mapName]
        ) {
          infectionPersonCount[cityName.mapName] = infectionPersonCount[
            cityName.mapName
          ]
            ? infectionPersonCount[cityName.mapName]
            : 0 + infectionPersonCount[cityName.announcementName]
            ? infectionPersonCount[cityName.announcementName]
            : 0
        }
      })
      return infectionPersonCount
    },
    setInfectionPersonCountData() {
      // データの取得
      const infectionPersonCount = this.getInfectionPersonCount()
      let maxInfectionPersonCount = 0
      Object.keys(infectionPersonCount).forEach((cityName: string) => {
        if (maxInfectionPersonCount < infectionPersonCount[cityName]) {
          maxInfectionPersonCount = infectionPersonCount[cityName]
        }
        this.remainderData.push({
          name: cityName,
          infectionPersonCount: infectionPersonCount[cityName]
        })
      })

      // 地図にデータを設定する
      this.geojsonOptions.onEachFeature = (feature: any, layer: any) => {
        layer.bindPopup(
          `<h4>${
            feature.properties.N03_003 ? `${feature.properties.N03_003} ` : ''
          }${feature.properties.N03_004}</h4><h5>感染者: ${
            infectionPersonCount[feature.properties.N03_004]
              ? `${infectionPersonCount[feature.properties.N03_004]}人`
              : 'なし'
          }</h5>`
        )
      }
      this.geojsonOptions.style = (feature: any) => {
        this.remainderData = this.remainderData.filter(
          (data: any) => data.name !== feature.properties.N03_004
        )
        return {
          fillColor: this.getColor(
            infectionPersonCount,
            feature.properties.N03_004,
            maxInfectionPersonCount
          ),
          weight: 0.4,
          opacity: 1,
          color: 'white',
          dashArray: '',
          fillOpacity: 0.8
        }
      }
    },
    getColor(
      infectionPersonCount: any,
      cityName: string,
      maxInfectionPersonCount: number
    ) {
      if (infectionPersonCount[cityName]) {
        const rPercentData = Math.round(
          (infectionPersonCount[cityName] / maxInfectionPersonCount) * 50
        )
        const gbPercentData = 50 - rPercentData
        return `rgb( ${rPercentData +
          50}%, ${gbPercentData}%, ${gbPercentData}% )`
      }
      return 'rgb( 50%, 50%, 50% )'
    }
  },
  head: (): MetaInfo => ({
    title: '感染マップ'
  })
})
</script>

<style lang="scss">
.Map {
  &-Heading {
    @include font-size(30);

    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}

.UpdatedAt {
  @include font-size(14);

  color: $gray-3;
  margin-bottom: 0.2rem;
}

.map-wrap {
  height: 700px;
}

.table-style {
  margin-top: 0 !important;
}
</style>
