<template>
  <div>
    <div class="header">
      <Header />
    </div>
    <Promotion />
    <div class="main">
      <div class="left-side">
         <Categories />
         <Brands />
      </div>
      <div class="right-side">
        <p>Show Our Top Categories</p>
        <div class="productComponent">
          <Product 
              v-for="product in store.products"
              :key="product.id"
              :imageSrc="product.imageSrc" 
              :productName="product.productName" 
          />
        </div>
        <p>Show Our Top Brands</p>
        <div class="productComponent">
          <Product 
              v-for="product in store.products"
              :key="product.id"
              :imageSrc="product.imageSrc" 
              :productName="product.productName" 
          />
        </div>
        <p>New Items</p>
        <div class="cartComponent">
            <ProductCart 
              v-for="cart in store.carts"
                :key="cart.id"
                :imageSrc="cart.imageSrc" 
                :title="cart.title"
                :price="cart.price"
                :description="cart.description"
                :color="cart.color"
              />
        </div>
      </div>
    </div>       
  </div>
</template>

<script>

import Header from './Header.vue';
import Promotion from './Promotion.vue';
import Product from '../components/Product.vue';
import { useStore } from "../stores/store.js";
import Categories from '../components/Categories.vue';
import Brands from "../components/Brands.vue"
import ProductCart from "../components/Product-cart.vue"

export default {
  name: "Home",
  components: {
    Header,
    Promotion,
    Product,
    Categories,
    Brands,
    ProductCart,
  },
  setup() {
    const store = useStore();
    return { store };
  },

  
};
</script>

<style scoped>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000; /* Adjust as needed */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .main{
    display: flex;
  }
  .main .left-side{
    margin-top: 40px;
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    /* justify-content: center; */
    align-items: center;
  }
  .main .right-side{
    padding: 30px;
    width: 70%;
  }
  .main .right-side p{
    font-size: 28px;
    font-weight: 600;
  }
  .productComponent{
    display: flex;
    justify-content: space-between;
  }
  .cartComponent{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap:30px
  }
</style>