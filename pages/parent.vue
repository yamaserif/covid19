<template>
  <div class="Parent">
    <h2 class="Parent-Heading">
      {{ $t('臨時休校中の新型コロナウイルス感染症対応についてのお願い') }}
    </h2>
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
            rel="noopener"
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
        <li>
          <span style='color:red;'>{{ $t('次の方は速やかにご相談をお願いします。') }}</span><br />
		  <ol>
			<li>風邪の症状や37.5度以上の発熱が4日（高齢者や基礎疾患のある方は2日）以上続いている</li>
			<li>強いだるさ（倦怠感）や息苦しさ（呼吸困難）がある</li>
		  </ol>
        </li>
	  </ul>
	   <h3>{{ $t('「新型コロナ受診相談センター」の役割と連絡先') }}</h3>
	  <ul>
        <li>
		  {{ $t('「新型コロナ受診相談センター」では、受診までの間の感染拡大を防止するために、次のような手順で受診案内を行っています。') }}<br />
		  <ol>
			<li>「コールセンター」において、症状と居住市町村を確認します。</li>
			<li>管轄の保健所が、相談者の方に対し折り返し連絡し、改めて症状等をお聞きした上で、県指定の医療機関と調整を行います。</li>
			<li>保健所から相談者へ受診いただく医療機関と、受診までの注意事項をお伝えします。</li>
			<li>注意事項に従って、指定の医療機関（新型コロナ感染症外来）を受診いただきます。</li>
			<li>医師が診察し、検査が必要な場合は保健所に依頼して検査を行います。</li>
		  </ol>
		  <br />
          <table summary="受診相談以外でのご相談 「新型コロナ相談窓口」連絡先一覧">
            <tbody>
              <tr>
                <th>
                  <strong>コールセンター</strong>
                </th>
                <th>
                  <strong>電話【毎日24時間対応・土日祝含む】（県内統一番号）</strong>
                </th>
              </tr>
              <tr>
                <td>新型コロナ受診相談センター</td>
                <td>0120-88-0006（フリーダイヤル）</td>
              </tr>
            </tbody>
          </table>
        </li>

      </ul>
    </StaticCard>
    <StaticCard>
      <h3>3. {{ $t('受診相談以外でのご相談') }}</h3>
      <ul>
        <li>{{ $t('予防方法などの一般的なご相談はこちら') }}</li>
        <li>
          {{ $t('受診相談以外でのご相談 「新型コロナ相談窓口」') }}<br />
          <table summary="受診相談以外でのご相談 「新型コロナ相談窓口」連絡先一覧">
            <tbody>
              <tr>
                <th>
                  <strong>居住地</strong>
                </th>
                <th>
                  <strong>相談窓口</strong>
                </th>
                <th>
                  <strong>電話（平日の日中）</strong>
                </th>
              </tr>

              <tr>
                <td>村山地域（山形市除く）</td>
                <td>村山保健所　保健企画課</td>
                <td>023-627-1100</td>
              </tr>
              <tr>
                <td>山形市</td>
                <td>山形市保健所　健康増進課</td>
                <td>023-616-7274</td>
              </tr>
              <tr>
                <td>最上地域</td>
                <td>最上保健所　地域保健福祉課</td>
                <td>0233-29-1268</td>
              </tr>
              <tr>
                <td>置賜地域</td>
                <td>置賜保健所　生活衛生課</td>
                <td>0238-22-3002</td>
              </tr>
              <tr>
                <td>庄内地域</td>
                <td>庄内保健所　保健企画課</td>
                <td>0235-66-4920</td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <h3>4. {{ $t('その他') }}</h3>
      <p>{{ $t('詳細は、各学校からのお知らせ等をご確認ください。') }}</p>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'

type ItemData = {
  items: Item[]
}

type Item = {
  title: string
  body: string
}

export default Vue.extend({
  components: {
    StaticCard
  },
  head: (): MetaInfo => ({
    title: 'お子様をお持ちの皆様へ'
  })
})
</script>

<style lang="scss">
.Parent {
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
</style>
