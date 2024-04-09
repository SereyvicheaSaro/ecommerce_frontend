<template> 
  <div class="main-container">
  <div class="left-side">
    <div class="main-img">
      <img src="../assets/images/camera.png" alt="">
    </div>
    <div class="pre-img">
      <img src="../assets/images/camera.png" alt="">
      <img src="../assets/images/camera.png" alt="">
      <img src="../assets/images/camera.png" alt="">
      <img src="../assets/images/camera.png" alt="">
    </div>
  </div>
  <div class="right-side">
    <h1 style="font-size: 50px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
    <div class="star-wrap">
      <div class="star" v-for="index in 4" :key="index">
        <img src="../assets/icons/Star.svg" alt="">
      </div>(100)
    </div> 
    <p style="font-size: 30px; text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <div style="display: flex; gap: 30px;">
      <div class="description"><h2>Description</h2></div>
      <div class="review"><h2>Reviews</h2></div>
    </div>
    <div class="des">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
  </div>
  
  </div>
  
</template>

<script>
export default {
  name: "ProductDetail",
}
</script>

<style scoped>
.main-container{
  width: 95%;
  margin: auto;
  gap: 100px;
  display: flex;
  margin-top: 20px;
}
.left-side{
  width: 40%;
  margin-top: 40px;
}
.right-side{
  width: 60%;
}
.left-side .main-img {
  width: 80%;
}
.main-img img {
  width: 100%;
}
.left-side .pre-img {
  width: 20%;
  display: flex;
  gap: 15px;
}
.pre-img img {
  width: 90%;
  cursor: pointer;
}
.star-wrap{
  display: flex;
  gap: 10px;
}
.star{
  width: 20px;
}
</style>
