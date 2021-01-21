<template>
  <div class="card">
    {{title}} = {{ price}}
    <img :src="imageUrl" :alt="imageUrl">  
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    imageUrl: {
      type: String,
      default: ''
    }
  },
  components: {
  }
};
</script>

<style lang="scss" scoped>  
</style>
