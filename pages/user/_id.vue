<template>
  <div class="container">
    <div class="user__info">
      <h2>{{ user.name }}</h2>
      <nav class="nav" @mouseover="onNavHover">
        <nuxt-link exact no-prefetch class="nuxt-link" :to="{name: 'user-id', params: $route.params}">Profile</nuxt-link>
        <nuxt-link exact no-prefetch class="nuxt-link" :to="{name: 'user-id-albums', params: $route.params}">Albums</nuxt-link>
        <nuxt-link exact no-prefetch class="nuxt-link" :to="{name: 'user-id-todos', params: $route.params}">ToDos</nuxt-link>
        <nuxt-link exact no-prefetch class="nuxt-link" :to="{name: 'user-id-posts', params: $route.params}">Posts</nuxt-link>
        <nuxt-link exact class="nav-home" :to="{path: '/'}">
          Back to user list
        </nuxt-link>
        <div ref="nav-slider" class="nav-slider" />
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
  },

  methods: {
    onNavHover(e) {
      if (/^nuxt-link/.test(e.target.className)) {
        this.$refs['nav-slider'].style.left = e.target.offsetLeft + 'px'
        this.$refs['nav-slider'].style.width = e.target.offsetWidth + 'px'
      }
    },
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
      position: relative;

      &-slider {
        background: rgba(255,255,255,.4);
        border-bottom: 2px solid #fff;
        display: block;
        width: 0;
        position: absolute;
        left: 0;
        bottom: -2px;
        transition: left .2s, width .2s;
      }

      .nuxt-link {
        position: relative;
        top: 2px;
        margin-right: .75rem;
        padding: .75rem 0;
        z-index: 1;

        &-active {
          border-bottom: 2px solid #9cf;
        }

        /*
        &:hover {
          border-bottom: 2px solid #a0a0a0;
        }
        */
      }

      &-home {
        color: $color-accent-blue;
        display: flex;
        margin-left: auto;
        padding: 0.75rem 0;
        position: relative;

        &::after {
          content: '';
          border-top: 2px solid #c0c0c0;
          border-right: 2px solid #c0c0c0;
          display: block;
          width: 8px;
          height: 8px;
          position: absolute;
          left: -28px;
          top: 16px;
          opacity: 0;
          transform: rotate(45deg);
          transition: left .2s, opacity .2s;
        }

        &:hover:after {
          left: -20px;
          opacity: 1;
        }

      }
    }
  }

  &__profile {
    font-size: 1.125rem;
  }
}
</style>
