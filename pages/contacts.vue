<template>
  <div class="Contacts">
    <page-header class="mb-3">
      {{ $t('お問い合わせ先一覧') }}
    </page-header>
    <div class="Contacts-Card">
      <table class="Contacts-Card-Table" v-bind="tableAttrs">
        <thead>
          <tr>
            <th class="text-center" scope="col">
              {{ $t('お問い合わせ内容') }}
            </th>
            <th class="text-center" scope="col">{{ $t('お問い合わせ先') }}</th>
            <th class="text-center" scope="col">{{ $t('電話番号・FAX') }}</th>
          </tr>
        </thead>
        <tbody>
		
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('発熱や咳などの症状があり受診したい場合') }}<br />
              {{ $t('→ かかりつけ医療機関がある') }}
            </td>
            <td class="bureau">
              {{ $t('かかりつけ医療機関') }}
            </td>
            <td class="tel"></td>
          </tr>
		  
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('発熱や咳などの症状があり受診したい場合') }}<br />
              {{ $t('→ かかりつけ医療機関がない（又は休診）') }}<br /><br />
              {{ $t('風邪症状が続いている、発症者と濃厚接触、海外から帰国直後等、感染が心配される場合') }}
            </td>
            <td class="bureau">
			  {{ $t('受診相談コールセンター') }}<br />
              {{ $t('（受付時間　24時間（土日祝日も含む））') }}
            </td>
            <td class="tel">TEL:<a href="tel:0120880006">0120-88-0006</a></td>
          </tr>
		  
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('発熱や咳などの症状はないが、感染していないか不安、予防方法を聞きたい等') }}
            </td>
            <td class="bureau">
			  {{ $t('一般相談コールセンター') }}<br />
              {{ $t('（受付時間　8：30から18：00（土日祝日も含む））') }}
            </td>
            <td class="tel">TEL:<a href="tel:0120567383">0120-56-7383</a></td>
          </tr>
		  
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('聴覚や言語に障がいのある方向けの受診相談') }}
            </td>
            <td class="bureau">
              {{ $t('新型コロナワクチン接種総合企画課') }}<br />
              {{ $t('（受付時間　8：30から17：15（平日のみ））') }}
            </td>
            <td class="tel">FAX:023-625-4294</td>
          </tr>


          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('その他') }}
            </td>
            <td class="bureau">
              {{ $t('新型コロナワクチン接種総合企画課') }}
            </td>
            <td class="tel">TEL:<a href="tel:023-630-2315">023-630-2315</a></td>
          </tr>
		  
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader
  },
  data() {
    return {
      pc: true
    }
  },
  computed: {
    tableAttrs(): any {
      return this.pc ? {} : { role: 'presentation' }
    },
    headingAttrs(): any {
      return this.pc ? {} : { role: 'heading', 'aria-level': '3' }
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      this.pc = window.innerWidth > 768
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('お問い合わせ先一覧') as string
    }
  }
})
</script>

<style lang="scss">
.Contacts {
  &-Card {
    @include card-container();

    &-Table {
      width: 100%;
      border-collapse: collapse;

      th {
        font-size: 14px !important;
      }

      td {
        padding: 0 16px;
        font-size: 14px;
      }

      @include largerThan($medium) {
        thead tr {
          height: 48px;
        }

        tbody tr {
          height: 96px;
        }

        th,
        tr:not(:last-child) {
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: thin solid rgba(0, 0, 0, 0.12);
        }

        tr:last-child {
          border: none;
        }
      }

      @include lessThan($medium) {
        thead {
          display: none;
        }

        tbody {
          tr {
            height: auto;

            .content {
              font-weight: bold;
              border-bottom: none !important;
              padding-top: 12px;
              padding-bottom: 8px;
            }

            .bureau {
              border-bottom: none !important;
            }

            .tel {
              padding-bottom: 12px;
            }
          }

          tr:not(:last-child) {
            border-bottom: thin solid rgba(0, 0, 0, 0.12);
          }
        }

        td {
          display: block;
        }
      }
    }
  }
}
</style>
