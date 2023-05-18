<script setup>
defineProps({
    goods:{
        type:Object,
        default:()=>{}
}
})
</script>
<template>
<RouterLink to="/" class="goods-item">
    <img v-img-lazy="goods.picture" alt="">
    <p class="name">{{ goods.name }}</p>
    <p class="desc">{{ goods.desc }}</p>
    <p class="price"><i>¥</i>{{goods.price}}</p>
</RouterLink>
</template>

<style lang='scss' scoped>
.goods-item{
        display: block;
        width: 220px;
        padding: 20px 30px;
        text-align: center;
        transition: all .5s;
        &:hover{
            transform: translateY(-3px);
            box-shadow: 0 3px 8px rgb(0 0 0 /20%);
        }
        img{
            width: 160px;
            height: 160px;
        }
        p{
            padding-top: 10px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .name{
            font-size: 16px;
        }
        .desc{
            color: #999;
            height: 29px;
        }
        .price{
            color: $priceColor;
            font-size: 20px;
        }
    }

</style>
