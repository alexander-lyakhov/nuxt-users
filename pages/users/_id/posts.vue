<template>
  <div class="">
    <list :items="posts">
      <template #title>
        Posts
      </template>
      <template #default="{ item }">
        {{ item.title }}
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
    const posts = await ctx.$axios.$get(`users/${ctx.params.id}/posts`)
    return { posts }
  },
}
</script>