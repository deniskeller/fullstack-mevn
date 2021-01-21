<template>
  <div class="header">
    <div class="header_left">LOGO</div>
    <div class="header_right">
      <ul >
        <li v-for="(category, key) in categories" :key="key">
          <router-link :to="`category/${category.id}`">{{category.title}}</router-link>
        </li>
      </ul>

    </div>    
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  components: {
  }
};
</script>

<style lang="scss" scoped>
  .header {
    border-bottom: 1px solid red;
  }
</style>
