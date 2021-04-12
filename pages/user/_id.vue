<template>
  <div class="container">
    <div class="user__info">
      <h2>{{ user.name }}</h2>
      <nav class="nav">
        <nuxt-link exact no-prefetch class="nuxt-link" :to="{name: 'user-id', params: $route.params}">Profile</nuxt-link>
        <nuxt-link exact no-prefetch class="nuxt-link" :to="{name: 'user-id-albums', params: $route.params}">Albums</nuxt-link>
        <nuxt-link exact no-prefetch class="nuxt-link" :to="{name: 'user-id-todos', params: $route.params}">ToDos</nuxt-link>
        <nuxt-link exact no-prefetch class="nuxt-link" :to="{name: 'user-id-posts', params: $route.params}">Posts</nuxt-link>
      </nav>
    </div>
    <pre v-if="$route.name === 'user-id'" class="user__profile">{{ JSON.stringify(user, null, 4) }}</pre>
    <nuxt-child/>
  </div>
</template>

<script>
export default {
  validate(ctx) {
    return ctx.params.id !== undefined
  },

  async asyncData(ctx) {
    const user = await ctx.$axios.$get('users/' + ctx.params.id)
    return { user }
  }
}
</script>

<style lang="scss" scoped>
.user {
  &__info {
    border-bottom: 2px solid #606060;
    margin-bottom: 1.5rem;

    h2 {
      font-size: 2.5rem;
      color: #e0e0e0;
    }

    .nav {
      display: flex;
      .nuxt-link {
        position: relative;
        top: 1px;
        margin-right: .75rem;
        padding: .75rem 0;

        &-active {
          border-bottom: 2px solid #9cf;
        }
      }
    }
  }

  &__profile {
    font-size: 1.125rem;
  }
}
</style>
