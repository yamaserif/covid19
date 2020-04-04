<template>
  <div class="Worker">
    <page-header class="mb-3">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </page-header>
    <StaticCard>
      <h3>
        <a
          href="https://www.pref.yamagata.jp/ou/shokokanko/110013/folder-kinyu/coronamadoguchi.html"
          target="_blank"
          rel="noopener"
          >{{
            $t('新型コロナウイルスに関する特別金融相談窓口の設置について')
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルスにより、県内中小企業者の経営に対する影響が懸念されています。このことから、県内中小企業者の資金繰り等を支援するため、特別金融相談窓口を中小企業振興課内に設置しました。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.pref.yamagata.jp/hojo/kankyo-energy/6050010shingatakorona.html"
          target="_blank"
          rel="noopener"
          >{{
            $t('廃棄物処理における新型コロナウイルス対策の実施等について')
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '廃棄物処理事業は、国民の生活を維持するために不可欠なサービスの一つであり、我が国において、新型コロナウイルスが流行した場合においても、安全かつ安定的に廃棄物の適正処理を行うとともに、その事業を継続することが求められます。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.pref.yamagata.jp/ou/shokokanko/110001/coronagakkoukyuugyousoudanmadoguchi.html"
          target="_blank"
          rel="noopener"
          >{{
            $t('新型コロナウイルスに係る学校臨時休業に伴う特別相談窓口について')
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルスに係る県内の学校臨時休業に伴い、多方面において事業活動に影響が生じることが想定されることから、県内企業等からの相談に応じるため、特別相談窓口を産業政策課内に設置しました。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/200324_keizai.pdf"
          target="_blank"
          rel="noopener"
        >
          {{ $t('新型コロナウイルス感染症に関する緊急地域経済対応について') }}
        </a>
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルスの影響により経営に支障をきたしている県内中小企業・小規模事業者の資金繰りを支援するため、山形県商工業振興資金融資制度「地域経済変動対策資金」の経済変動事象に新型コロナウイルスを指定するとともに、年１.６％（固定）の利子を県、市町村、金融機関が連携して無利子とする利子補給制度を令和２年３月１６日から実施。（政府のセーフティネット４号・５号、危機関連保証により、保証料も無料）'
          )
        }}
      </p>
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
  head(): MetaInfo {
    return {
      title: this.$t('企業の皆様・はたらく皆様へ') as string
    }
  }
})
</script>
