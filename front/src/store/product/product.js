import { getProduct, getProducts } from '@/services/products.services';

export default {

  state: {    
    product: {},
    products: [
      // {
      //   title:"kek",
      //   description:"kek",
      //   price:"100",
      //   amount:"10",
      //   imageUrl:"10"
      // }
    ],
    productError: null,   
  },

  getters :{
    // product: function (state) {
    //   return state.product
    // },
    product: ({ product }) => product,
    products: ({ products }) => products,
    productError: ({ productError }) => productError, 
  },

  mutations: {
    setProduct(state, product) {
      state.product = product;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProductError(state, error) {
      state.productError = error;
    },
  },

  actions: {

    async fetchProduct({ commit }, id) {
      try {
        const product = await getProduct(id);
        commit('setProduct', product);
      } catch (err) {
        commit('setProductError', err);
      }
    },
    async fetchProducts({ commit }) {
      try {
        const products = await getProducts();
        commit('setProducts', products);
      } catch (err) {
        commit('setProductError', err);
      }
    },
  
  }
}
