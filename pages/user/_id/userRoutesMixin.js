export default {
  data() {
    return {
      isVisible: true
    }
  },

  beforeRouteLeave(to, from, next) {
    this.isVisible = false;
    next();
  }
}