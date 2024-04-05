<template>
    <div class="brands">
        <div class="head">Brands</div>
        <div class="brands-list">

        </div>
        <ul>
            <li>Asus</li>
            <li>MSI</li>
            <li>Lenovo</li>
            <li>Apple</li>
        </ul>
    </div>
</template>

<script>
    export default{
        name: "brands",
    }
</script>

<style scoped>
.brands{
    width: 60%;
    padding: 0%;
    border: #2AABEE solid 2px;
    border-radius: 10px;
}
.head{
    border-radius: 10px 10px  0 0;
    background-color: #2AABEE;
    padding: 15px 0px;
    text-align: center;
    color: white;
    font-weight: 600;
    font-size: 25px;
}
ul{
    padding-left: -100px;
}
ul li{
    padding: 10px;
    list-style-type: none;
    font-size: 22px;
}
</style>