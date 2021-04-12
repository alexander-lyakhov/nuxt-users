<template>
  <div v-show="isVisible" class="list">
    <list :items="albums" :columns="2" :separator="false">
      <template #title>
        Albums
      </template>
      <template #default="{ item }">
        <div class="item-album">{{ item.title }}</div>
      </template>
    </list>
  </div>
</template>

<script>
import list from '@/components/list'
export default {
  components: {
    list
  },

  data() {
    return {
      isVisible: true
    }
  },

  async asyncData(ctx) {
    const albums = await ctx.$axios.$get(`users/${ctx.params.id}/albums`)
    return { albums }
  },

  beforeRouteLeave(to, from, next) {
    this.isVisible = false;
    next();
  }
}
</script>

<style lang="scss" scoped>
.list::v-deep {
  .item {
    border: none;

    &-album {
      font-size: 1.25rem;
      background: #303030;
      border: 4px solid #808080;
      box-shadow: 0 4px 8px rgba(0,0,0,0.25);
      text-transform: capitalize;
      width: 100%;
      margin: -.25rem 0;
      padding: 1rem;
      cursor: pointer;
    }

  }
}
</style>