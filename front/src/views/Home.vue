<template>
  <div class="home">
    <div class="product-list">
      <ProductCard 
       v-for="(product, key) in products"
       :key="key"
       :title="product.title"
       :description="product.description"
       :price="product.price"
       :imageUrl="product.imageUrl"
      />
    </div>
    

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "Home",
  components: {
    ProductCard: () => import('@/components/layouts/ProductCard')    
  },
  mounted(){
    this.fetchProducts()
    
  },
  computed: {
    ...mapGetters({
      products: 'products'
      
    })
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts'
    })
  }
};
</script>
