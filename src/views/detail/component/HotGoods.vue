<script setup>
import {getHotGoodsAPI} from '@/apis/detail'
const route=useRoute()
//适配不同type
const props=defineProps({
    type:{
        type:Number,
        default:1
    }
})
const titleMap={
    1:'24小时热榜',
    2:'周热榜'
}
//适配不同title
const title=computed(()=>titleMap[props.type])
const hotList=ref([])
const getHot=async ()=>{
    const res=await getHotGoodsAPI({
    id:route.params.id,
    type:props.type
})
    hotList.value=res.result
}
onMounted(()=>getHot())
</script>
<template>
  <div class="hot-goods">
    <h3>{{ title }}</h3>
    <RouterLink :to="`/detail/${item.id}`" v-for="item in hotList" :key="item.id" class="goods-item">
        <img v-img-lazy="item.picture" alt="">
        <p class="name ellipsis">{{ item.name }}</p>
        <p class="desc ellipsis">{{ item.desc }}</p>
        <p class="price ellipsis">{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<style lang='scss' scoped>
.hot-goods{

    h3{
        background-color: $helpColor;
        color: #fff;
        font-size: 18px;
        height: 70px;
        line-height: 70px;
        padding-left: 25px;
        margin-bottom: 10px;
        font-weight: 400;
    }
    .goods-item{
        display: block;
        width: 220px;
        margin: 10px auto;
        text-align: center;
        img{
            width:160px;
            height: 160px;
        }
        p{
            padding-top: 10px;
        }
        .name{
            font-size: 16px;
        }
        .desc{
            color:#999;
            height:29px;
        }
        .price{
            &::before{
                content: '¥';
                font-size: 18px;
                padding-left: 5px;
            }
            color:$priceColor;
            font-size: 20px;
        }
    }
}

</style>
