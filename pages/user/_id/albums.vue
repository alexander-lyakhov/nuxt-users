<template>
  <div v-show="isVisible" class="list">
    <list :items="albums" :columns="4" :separator="false">
      <template #title>
        Albums
      </template>
      <template #default="{ item }">
        <!--
        <div class="item-album">{{ item.title }}</div>
        -->
        <div class="item-album">
          <div class="item-album__img">
            <img src="/images/Album-04.jpg" />
          </div>
          <div class="item-album__title">
            {{ item.title }}
          </div>
        </div>
      </template>
    </list>
  </div>
</template>

<script>
import list from '@/components/list'
import userRoutesMixin from './userRoutesMixin.js'
export default {
  mixins: [userRoutesMixin],

  components: {
    list
  },

  async asyncData(ctx) {
    const albums = await ctx.$axios.$get(`users/${ctx.params.id}/albums`)
    return { albums }
  },
}
</script>

<style lang="scss" scoped>
.list::v-deep {
  .item {
    border: none;

    &-album {
      background: #000;
      border: .25rem solid #fff;
      box-shadow: 0 4px 8px rgba(0,0,0,0.25);
      text-transform: capitalize;
      margin: -.25rem 0;
      cursor: pointer;

      &__img {
        background: #fff;
        border-bottom: 1px solid #c0c0c0;
        display: flex;
        position: relative;

        &::after {
          content: '';
          @extend .overlay;
        }

        img {
          object-fit: cover;
          width: 100%;
        }
      }

      &__title {
        background: #000;
        display: flex;
        text-align: center;
        padding: .5rem;
      }
    }
  }
}
</style>