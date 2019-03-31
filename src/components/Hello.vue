<template>
  <div class="Hello">
    
  </div>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {};
  },
  mounted: function() {},
  methods: {
    handleClose: function() {
      console.log("返回");
    },
    more: function() {
      console.log("更多");
    }
  }
};
</script>

<style lang="stylus">
#Hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
