<template>
  <div class="Network">
    <h2 class="Network-Heading">
      {{ $t('感染ネットワーク') }}
      <span class="UpdatedAt">
        <span>{{ $t('最終更新') }} {{ lastUpdate }}</span>
      </span>
    </h2>
    <StaticCard>
      <cytoscape ref="cy" :config="config" :pre-config="preConfig">
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
import StaticCard from '@/components/StaticCard.vue'
import VirusNetwork from '@/data/virusNetwork.json'
import Data from '@/data/data.json'
const coseBilkent = require('cytoscape-cose-bilkent')

Vue.use(VueCytoscape)
export default Vue.extend({
  components: {
    StaticCard
  },
  data() {
    const dataObject: any = {
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
      lastUpdate: VirusNetwork.lastUpdate
    }
    return dataObject
  },
  mounted() {
    this.elements = this.getElementsData()
    this.$nextTick(() => {
      const vueCy: any = this.$refs.cy
      vueCy.cy.then((cy: any) => {
        const layout = cy.elements().layout(this.layout)
        layout.run()
      })
    })
  },
  methods: {
    preConfig(cytoscape: any) {
      cytoscape.use(coseBilkent)
    },
    getElementsData() {
      const virusNetwork: any = VirusNetwork
      const data: any = Data

      const returnElementsData = data.patients.data.map(
        (element: any, index: number) => {
          const returnElement = {
            data: {
              id: index + 1,
              label:
                element.date.replace(/-/g, '/') +
                '\n' +
                element.居住地 +
                '\n' +
                element.年代 +
                ' ' +
                element.性別
            },
            classes: [
              'multiline-manual',
              element.性別 === '男性' ? 'male' : 'female'
            ]
          }
          return returnElement
        }
      )
      const edgeData = virusNetwork.data.map((edge: any) => {
        edge.id = `edge${edge.source}to${edge.target}`
        return edge
      })
      return returnElementsData.concat(edgeData)
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
</style>
