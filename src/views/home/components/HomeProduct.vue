<script setup>
import HomePanel from './HomePanel.vue';
import {getProductAPI} from '@/apis/product.js'
import {ref,onMounted} from 'vue'
import GoodsItem from './GoodsItem.vue';
const goodsList=ref([])
const getGoodsList=async()=>{
    const res=await getProductAPI()
    goodsList.value=res.result
}
onMounted(()=>getGoodsList())
</script>
<template>
    <div class="home-product" v-for="item in goodsList" :key="item.id" >
        <HomePanel :title="item.name" />
            <div class="box" >
            <RouterLink to="/" class="cover">
                <img v-img-lazy="item.picture" alt="">
                <strong class="label">
                    <span>{{ item.name }}馆</span>
                    <span>{{item.saleInfo}}</span>
                </strong>
            </RouterLink >
        <ul class="goods-list">
            <li v-for="i in item.goods" :key="i.id">
               <GoodsItem :goods="i"></GoodsItem>
            </li>
        </ul>
            </div>

       
    </div>
</template>

<style lang='scss' scoped>
.home-product{
    background-color: #fff;
    margin-top: 20px;
   .box{
    display: flex;
    .cover{
        height: 610px;
        width: 240px;
        position: relative;
        margin-right: 10px;
        img{
            width: 100%;
            height: 100%;

        }
        .label{
            width: 188px;
            height: 66px;
            position: absolute;
            display: flex;
            left: 0;
            top: 50%;
            transform: translateY(-50px);
            font-size: 18px;
            font-weight: 400;
            color: #fff;
            line-height: 66px;
            span{  
                text-align: center;
                &:first-child{
                    width: 76px;
                    background-color: rgba(0,0,0,.9);
                }
                &:last-child{
                    flex: 1;
                    background-color: rgba(0,0,0,.7);
                }
            }
        }

   }
   .goods-list{
    display: flex;
    flex-wrap: wrap;
    width: 990px;
    li{
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;
        &:nth-last-child(-n+4){
            margin-bottom: 0;
        }
        &:nth-child(4n){
            margin-right: 0;
        }
    }
    
   }
}
}
</style>
