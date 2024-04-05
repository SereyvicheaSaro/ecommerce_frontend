<template>
  <div>
    <Header />
    <Promotion />
    <div class="main">
      <div class="left-side">
         <Categories />
         <Brands />
      </div>
      <div class="right-side">
        <div class="productComponent">
          <Product 
              v-for="product in store.products"
              :key="product.id"
              :imageSrc="product.imageSrc" 
              :productName="product.productName" 
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

export default {
  name: "Home",
  components: {
    Header,
    Promotion,
    Product,
    Categories,
    Brands,
  },
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>
<style>
  .main{
    display: flex;
  }
  .main .left-side{
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }
  .main .right-side{
    padding: 30px;
    width: 70%;
  }
  .productComponent{
    display: flex;
    justify-content: space-between;
  }
</style>