<template>
  <div class="">
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
export default {
  components: {
    list
  },

  async asyncData(ctx) {
    const todos = await ctx.$axios.$get(`users/${ctx.params.id}/todos`)
    return { todos }
  },
}
</script>
