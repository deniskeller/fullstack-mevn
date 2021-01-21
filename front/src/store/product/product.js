import { getProduct, getProducts } from '@/services/products.services';

export default {

  state: {    
    product: {},
    products: [
      {
        title: 'kek'
      },
      {
        title: 'lol'
      },
    ],
    productError: null    
  },

  getters :{
    // product: function (state) {
    //   return state.product
    // },
    product: ({product}) => product,
    products: ({products}) => products,
    productError: ({productError}) => productError  
  },

  mutations: {
    setProduct(state, product){
      state.product = product
    },
    setProducts(state, products){
      state.products = products
    },
    setProductError(state, error){
      state.productError = error
    },
  },

  actions: {

    async fetchProduct({commit}, id) {
      try {
        const product = await getProduct(id)
        commit('setProduct', product)
      } catch (error) {
        commit('setProductError', error)   
      }
    },
  
    async fetchProducts({commit}) {
      try {
        const products = await getProducts(id)
        commit('setProducts', products)
      } catch (error) {
        commit('setProductError', error)       
      }
    },
  
  }
}
