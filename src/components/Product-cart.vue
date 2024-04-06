<template>
    <div class="product-cart">
      <div class="img">
        <img :src="imageSrc" alt="">
      </div>
      <div class="title">
        <p>{{ title }}</p>
        <p>${{ price }}</p>
      </div>
      <div class="description">
        {{ description }}
      </div>
      <div class="color">

      </div>
      <div class="star-wrap">
        <div class="star" v-for="index in 4" :key="index">
          <img src="../assets/icons/Star.svg" alt="">
        </div>
      </div>
      <Button />
    </div>
</template>
  
<script>
import Button from "./Button.vue"
  export default {
    name: "ProductCart",
    props: [
      "imageSrc",
      "title",
      "price",
      "description",
      "color",
    ],
    components: {Button}
  };
</script>
  
<style scoped>
.product-cart{
  padding: 10px;
  width: 20%;
  border: 1px solid gray;
  border-radius: 10px;
}
.product-cart img{
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.product-cart .title{
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}
.star-wrap{
  display: flex;
}
.star{
  width: 20px;
  padding: 10px 10px 10px 0;
}
</style>
  