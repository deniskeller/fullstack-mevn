<template>
  <div id="app">
    <Header :categories="categories"/>    
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  props: {},
  components: {
    Header: () => import('@/components/layouts/Header')
  },
  data() {
    return {
      categories: [
        {title: 'PS3', id: 1},
        {title: 'PS4', id: 2},
        {title: 'PS5', id: 3}
      ]
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
