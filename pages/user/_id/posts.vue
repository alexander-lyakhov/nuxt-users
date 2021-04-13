<template>
  <div v-show="isVisible">
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
import userRoutesMixin from './userRoutesMixin.js'
export default {
  mixins: [userRoutesMixin],

  components: {
    list
  },

  async asyncData(ctx) {
    const posts = await ctx.$axios.$get(`users/${ctx.params.id}/posts`)
    return { posts }
  },
}
</script>