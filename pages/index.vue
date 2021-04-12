<template>
  <div class="container">
    <list :items="users">
      <template #title>
        User list
      </template>
      <template #default="{ item }">
        <a href="#" @click.prevent="onUserClick(item.id)">{{ item.name }}</a>
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

  async asyncData({$axios}) {
    const users = await $axios.$get('/users')
    return {users}
  },

  methods: {
    onUserClick(id) {
      this.$router.push('user/' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
