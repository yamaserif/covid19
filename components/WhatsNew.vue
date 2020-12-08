<template>
  <div class="WhatsNew">
    <h3 class="WhatsNew-heading">
      <v-icon size="24" class="WhatsNew-heading-icon">
        mdi-information
      </v-icon>
      {{ $t('お知らせ') }}
    </h3>
    <ul class="WhatsNew-list">
      <paginate
        class="WhatsNew-list"
        name="paginate-items"
        :list="items"
        :per="4"
      >
        <li
          v-for="(item, i) in paginated('paginate-items')"
          :key="i"
          class="WhatsNew-list-item"
        >
          <a
            class="WhatsNew-list-item-anchor"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <time
              class="WhatsNew-list-item-anchor-time px-2"
              :datetime="formattedDate(item.date)"
            >
              {{ item.date }}
            </time>
            <span class="WhatsNew-list-item-anchor-link">
              {{ item.text }}
              <v-icon
                v-if="!isInternalLink(item.url)"
                class="WhatsNew-item-ExternalLinkIcon"
                size="12"
              >
                mdi-open-in-new
              </v-icon>
            </span>
          </a>
        </li>
      </paginate>
    </ul>
    <paginate-links
      for="paginate-items"
      class="pagination"
      :limit="5"
      :show-step-links="true"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { convertDateToISO8601Format } from '@/utils/formatDate'
const VuePaginate = require('vue-paginate')

Vue.use(VuePaginate)
export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      paginate: ['paginate-items']
    }
  },
  methods: {
    isInternalLink(path: string): boolean {
      return !/^https?:\/\//.test(path)
    },
    formattedDate(dateString: string) {
      return convertDateToISO8601Format(dateString)
    }
  }
})
</script>

<style lang="scss">
.WhatsNew {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;
}

.WhatsNew-heading {
  display: flex;
  align-items: center;

  @include card-h2();

  margin-bottom: 12px;
  color: $gray-2;
  margin-left: 12px;

  &-icon {
    margin: 3px;
  }
}

.WhatsNew .WhatsNew-list {
  padding-left: 0;
  list-style-type: none;

  &-item {
    &-anchor {
      display: inline-block;
      text-decoration: none;
      margin: 5px;
      font-size: 14px;

      @include lessThan($medium) {
        display: flex;
        flex-wrap: wrap;
      }

      &-time {
        flex: 0 0 90px;

        @include lessThan($medium) {
          flex: 0 0 100%;
        }

        color: $gray-1;
      }

      &-link {
        flex: 0 1 auto;

        @include text-link();

        @include lessThan($medium) {
          padding-left: 8px;
        }
      }

      &-ExternalLinkIcon {
        margin-left: 2px;
        color: $gray-3 !important;
      }
    }
  }
}

.pagination {
  padding-right: 24px;
  margin-right: 10px;
  display: flex;
  list-style-type: none;
  justify-content: center;
}
.pagination li {
  margin-left: 10px;
  font-size: 1.2em;
}
</style>
