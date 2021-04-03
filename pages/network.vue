<template>
  <div class="Network">
    <h2 class="Network-Heading">
      {{ $t('感染ネットワーク') }}
      <span class="UpdatedAt">
        <span>{{ $t('最終更新') }} {{ lastUpdate }}</span>
      </span>
    </h2>
    <StaticCard>
      <client-only>
        <span style="margin-right:5px">{{ $t('表示範囲') }}</span>
        <date-picker
          v-model="startDate"
          :language="ja"
          format="yyyy年MM月dd日"
          class="datePicker"
        />
        <span>～</span>
        <date-picker
          v-model="endDate"
          :language="ja"
          format="yyyy年MM月dd日"
          class="datePicker"
        />
      </client-only>
      <cytoscape
        v-if="isViewCytoscape"
        ref="cy"
        :config="config"
        :pre-config="preConfig"
        class="cytoscape"
      >
        <cy-element
          v-for="def in elements"
          :key="`${def.data.id}`"
          :definition="def"
          :sync="true"
        />
      </cytoscape>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import VueCytoscape from 'vue-cytoscape'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import { ja } from 'vuejs-datepicker/dist/locale'
import StaticCard from '@/components/StaticCard.vue'
import VirusNetwork from '@/data/virusNetwork.json'
const coseBilkent = require('cytoscape-cose-bilkent')

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

Vue.use(VueCytoscape)
export default Vue.extend({
  components: {
    StaticCard
  },
  data() {
    const dataObject: any = {
      ja,
      startDate: '',
      endDate: '',
      config: {
        style: [
          {
            selector: 'node',
            style: {
              label: 'data(label)',
              'text-outline-width': 2,
              'text-outline-color': 'white',
              'text-valign': 'bottom',
              'text-halign': 'center'
            }
          },
          {
            selector: 'edge',
            style: {
              label: 'data(label)',
              'text-outline-width': 2,
              'text-outline-color': 'yellow'
            }
          },
          {
            selector: '.multiline-manual',
            style: {
              'text-wrap': 'wrap'
            }
          },
          {
            selector: '.male',
            style: {
              'background-color': 'steelblue'
            }
          },
          {
            selector: '.female',
            style: {
              'background-color': 'hotpink'
            }
          },
          {
            selector: '.else',
            style: {
              'background-color': 'gray'
            }
          }
        ]
      },
      layout: {
        name: 'cose-bilkent',
        padding: 30,
        idealEdgeLength: 100,
        nodeDimensionsIncludeLabels: true
      },
      elements: [],
      isViewCytoscape: true,
      lastUpdate: ''
    }
    return dataObject
  },
  watch: {
    startDate() {
      this.elements = this.getElements()
      this.updateLayout()
    },
    endDate() {
      this.elements = this.getElements()
      this.updateLayout()
    }
  },
  mounted() {
    this.lastUpdate = this.getLastUpdate()
    this.startDate = dayjs()
      .subtract(14, 'day')
      .format()
    this.endDate = dayjs().format()
    this.updateLayout()
  },
  methods: {
    preConfig(cytoscape: any) {
      cytoscape.use(coseBilkent)
    },
    getLastUpdate() {
      return VirusNetwork.lastUpdate
    },
    getElements() {
      const virusNetwork: any = VirusNetwork
      const startDate = dayjs(this.startDate)
      const endDate = dayjs(this.endDate)

      const returnElementsData = VirusNetwork.baseData.filter(
        (element: any) => {
          const date = dayjs(element.data.date)
          return (
            date.isSameOrAfter(startDate, 'day') &&
            date.isSameOrBefore(endDate, 'day')
          )
        }
      )
      const edgeData = virusNetwork.networkData.map((edge: any) => {
        edge.id = `edge${edge.source}to${edge.target}`
        return edge
      })
      return returnElementsData.concat(edgeData)
    },
    updateLayout() {
      this.isViewCytoscape = false
      this.$nextTick(() => {
        this.isViewCytoscape = true
        this.$nextTick(() => {
          const vueCy: any = this.$refs.cy
          vueCy.cy.then((cy: any) => {
            const cyElements = cy.elements()
            const layout = cyElements.layout(this.layout)
            layout.run()
          })
        })
      })
    },
    dateToFormatString(date: Date, format: string) {
      format = format.replace(/YYYY/, date.getFullYear().toString())
      format = format.replace(/MM/, (date.getMonth() + 1).toString())
      format = format.replace(/DD/, date.getDate().toString())

      return format
    }
  },
  head: (): MetaInfo => ({
    title: '感染ネットワーク'
  })
})
</script>

<style lang="scss">
.Network {
  &-Heading {
    @include font-size(30);

    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}

.cytoscape {
  border: double 5px #4ec4d3;
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
.datePicker {
  display: inline-block;
  div > input {
    border: 1px ridge #333;
    text-align: center;
  }
}
</style>
