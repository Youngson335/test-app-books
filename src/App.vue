<template>
  <div class="container">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: #e8e8e8;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  max-width: calc(1000px - 10%);
  margin: 0 auto;
  @media (max-width: 960px) {
    max-width: calc(1000px - 30%);
  }
  @media (max-width: 790px) {
    max-width: calc(1000px - 50%);
  }
  @media (max-width: 690px) {
    max-width: calc(700px - 30%);
  }
  @media (max-width: 550px) {
    max-width: calc(700px - 50%);
  }
}
</style>
