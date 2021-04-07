<template>
  <div class="container">
    <h2>
      <span>User list</span>
    </h2>
  <ul class="list">
    <li class="item" v-for="(item, index) in users" :key="index">
      <a href="#">{{ item.name }}</a>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },

  async mounted() {
    //console.log(this.$axios)
    const res = await this.$axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data)
    this.users = res.data;
  }
}
</script>

<style lang="scss">
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 16px 16px 32px;

  .list {
    .item {
      font: 1rem verdana;
      border-bottom: 1px solid #606060;
      //min-height: 32px;
      line-height: 1.4;
      display: block;
      padding: .5rem 0;
      &:last-child {
        border: none;
      }
    }
  }
}
</style>
