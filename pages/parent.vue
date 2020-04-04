<template>
  <div class="Parent">
    <page-header class="mb-3">
      {{ $t('臨時休校中の新型コロナウイルス感染症対応についてのお願い') }}
    </page-header>
    <StaticCard>
      <h3>1. {{ $t('感染予防・健康管理') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。'
            )
          }}
        </li>
        <li>
          {{ $t('手洗い、咳エチケット等により、感染予防に努めてください。')
          }}<br />
          <a
            href="https://tokyodouga.jp/lViN9C_BS-0.html"
            target="_blank"
            rel="noopener noreferrer"
            >{{ $t('【参考】感染症予防のための正しい手洗い方法（動画）') }}</a
          >
        </li>
        <li>
          {{
            $t(
              '規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。'
            )
          }}
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <h3>2. {{ $t('感染症を疑う場合の対応') }}</h3>
      <ul>
        <li>{{ $t('各保健所にご相談ください') }}</li>
        <li>
          {{ $t('「新型コロナウイルス感染症にかかる相談窓口について」') }}<br />
          <table
            summary="相談窓口（帰国者・接触者相談センター）連絡先一覧"
            class="contact-table"
          >
            <tr>
              <th v-for="(contactTitle, i) in contactTable.titles" :key="i">
                <strong>{{ contactTitle }}</strong>
              </th>
            </tr>
            <tr v-for="(contact, i) in contactTable.contacts" :key="i">
              <td v-for="(contactData, i) in contact" :key="i">
                {{ contactData }}
              </td>
            </tr>
          </table>
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <h3>3. {{ $t('その他.parent') }}</h3>
      <p>{{ $t('詳細は、各学校からのお知らせ等をご確認ください。') }}</p>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard
  },
  data() {
    return {
      contactTable: {
        titles: [
          '居住地',
          '相談窓口',
          '電話（平日の日中',
          '電話（休日や時間外）'
        ],
        contacts: [
          [
            '村山地域（山形市除く）',
            '村山保健所　保健企画課',
            '023-627-1100',
            '左に同じ'
          ],
          ['山形市', '山形市保健所　健康増進課', '023-616-7274', '左に同じ'],
          [
            '最上地域',
            '最上保健所　地域保健福祉課',
            '0233-29-1268',
            '0233-29-1300'
          ],
          ['置賜地域', '置賜保健所　生活衛生課', '0238-22-3002', '左に同じ'],
          ['庄内地域', '庄内保健所　保健企画課', '0235-66-4920', '左に同じ']
        ]
      }
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('お子様をお持ちの皆様へ') as string
    }
  }
})
</script>

<style>
.contact-table {
  margin: 5px;
}
.contact-table th,
.contact-table td {
  padding: 5px 10px;
}
</style>
