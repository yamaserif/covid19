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
          <l-map ref="map" :zoom="zoom" :center="center">
            <l-tile-layer :url="tile.url" :attribution="tile.attribution" />
            <l-geo-json :geojson="geojson" />
          </l-map>
        </no-ssr>
      </div>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
// import { latLng } from 'leaflet';
import StaticCard from '@/components/StaticCard.vue'
import mapGeojson from '@/static/yamagata_map.geojson.json'
// import Data from '@/data/data.json'

export default Vue.extend({
  components: {
    StaticCard
  },
  data() {
    const dataObject: any = {
      tile: {
        url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
        attribution:
          "<a href='https://maps.gsi.go.jp/development/ichiran.html'>国土地理院</a>, <a href='http://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-v2_3.html'>行政区域データ出典「国土数値情報」</a>"
      },
      zoom: 9,
      center: [38.475, 140],
      geojson: mapGeojson,
      lastUpdate: 'test'
    }
    console.log(dataObject.mapGeojson)
    return dataObject
  },
  mounted() {
    /*
    this.elements = this.getElementsData()
    this.$nextTick(() => {
      const vueCy: any = this.$refs.cy
      vueCy.cy.then((cy: any) => {
        const layout = cy.elements().layout(this.layout)
        layout.run()
      })
    })
    */
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

th {
  text-align: center;
}

td {
  padding: 5px 15px;
}

.UpdatedAt {
  @include font-size(14);

  color: $gray-3;
  margin-bottom: 0.2rem;
}

.map-wrap {
  height: 700px;
}
</style>
