<template>
  <div class="">
    <list :items="albums" :columns="2">
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

  async asyncData(ctx) {
    const albums = await ctx.$axios.$get(`users/${ctx.params.id}/albums`)
    return { albums }
  },
}
</script>

<style lang="scss" scoped>
.item-album::v-deep {
  //background: #033;
}
</style>