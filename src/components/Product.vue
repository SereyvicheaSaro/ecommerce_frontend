<template>
    <div class="product">
      <div class="img">
        <img :src="imageSrc" alt="">
      </div>
      <div class="title">
        <p>{{ productName }}</p>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: "Product",
    props: [
      "imageSrc",
      "productName",
    ]
  };
  </script>
  
  <style scoped>
  .product{
    padding: 0 10px;
    width: 20%;
  }
  .product img{
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .product p{
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    position: relative;
    margin-top: -5px;
  }
  </style>
  