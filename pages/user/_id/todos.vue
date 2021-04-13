<template>
  <div v-show="isVisible">
    <list :items="todos">
      <template #title>
        ToDos
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
    const todos = await ctx.$axios.$get(`users/${ctx.params.id}/todos`)
    return { todos }
  },
}
</script>
