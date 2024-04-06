<template>
    <div class="add-to-cart-btn">
        <img src="../assets/icons/shopping-cart.svg" alt="">
        <p>Add to Cart</p>
    </div>
</template>

<script>
    export default{
        name: "Button"
    }
</script>

<style>
    .add-to-cart-btn{
        display: flex;
        gap: 20px;
        border: 1.5px solid grey;
        border-radius: 8px;
        justify-content: center;
        padding: 5px;
        line-height: 0cap;
    }
    .add-to-cart-btn p{
        font-size: 20px;
    }
</style>