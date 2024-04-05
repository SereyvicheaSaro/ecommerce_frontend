<template>
    <div class="header">
        <div class="left">
            <div class="logo">LOGO</div>
        </div>
        <div class="right">
            <div class="search-bar">
                <img src="/src/assets/icons/Icon.svg" alt="Search Icon">
                <input type="text" placeholder="Search products">
            </div>
            <div class="cart-btn">
                <img src="/src/assets/icons/shopping-cart.svg" alt="Shopping Icon">
                <p>Cart</p>
                <span id="cart-badge">0</span>
            </div>
            <div class="account">
                <img src="/src/assets/icons/user.svg" alt="user Icon">
                <p>Account</p>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default{
        name: "Header"
    }
</script>

<style>
    img{
        width: 20px;
    }
    .header{
        height: 80px;
        background-color: #71C4EF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
    }
    .right{
        display: flex;
        gap: 20px;
    }
    .search-bar{
        display: flex;
        align-items: center;
        gap: 10px;
        width: 450px;
        height: 44px;
        padding: 0 10px 0 10px;
        border-radius: 8px;
        background-color: white; 
        
    }
    .search-bar input{
        width: 100%;
        height: 90%;
        border: none;
        font-size: 18px;
    }
    .search-bar input:focus{
        outline: none;
    }
    .cart-btn{
        display: flex;
        gap: 8px;
        align-items: center;
        height: 44px;
        background-color: white;
        border-radius: 8px;
        font-size: 17px;
        justify-content: center;
        padding-left: 10px;
    }
    
    #cart-badge {
        position: relative;
        top: -12px;
        right: -8px;
        background-color: red;
        color: white;
        border-radius: 100%;
        font-size: 12px;
        text-align: center;
        padding: 2px 5px;

    }

    .account{
        display: flex;
        gap: 8px;
        align-items: center;
        width: 119px;
        height: 44px;
        background-color: white;
        border-radius: 8px;
        font-size: 17px;
        justify-content: center;
    }
</style>