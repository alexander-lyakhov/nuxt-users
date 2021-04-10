<template>
  <div>
    <h2>
      <slot name="title">List Header</slot>
    </h2>
    <ul class="list">
      <li class="item" :style="itemWidth" v-for="(item, index) in items" :key="index">
        <slot :item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
      required: true
    },

    columns: {
      type: Number,
      default: 1,
      validator: (value) => [1,2,4,5,8,10].includes(value)
    }
  },

  created() {
    console.log('created', this.items)
  },

  computed: {
    itemWidth() {
      return {width: `${100 / this.columns}%`};
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.25rem 1.5rem;

  .item {
    font: 1rem verdana;
    //background: #303030;
    border-bottom: 1px solid #606060;
    line-height: 1.4;
    display: block;
    //width: 25%;
    margin: .25rem 0;
    padding: .5rem 0;

    &:last-child {
      border: none;
    }
  }
}
</style>
