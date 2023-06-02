<script setup>
import { RouterLink } from "vue-router";
import {onMounted,ref} from 'vue'
import HomePanel from "./HomePanel.vue"
import {getNewAPI} from '@/apis/new.js'
const newList=ref([])
const getNewList=async ()=>{
   const res=await getNewAPI()
    newList.value=res.result
}
onMounted(()=>getNewList())
</script>
<template>
  <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱"/>
<ul class="good-list">
    <li v-for="item in newList" :key="item.id">
        <RouterLink :to="`/detail/${item.id}`">
        <img :src="item.picture" alt="">
        <p class="name">{{ item.name }}</p>
        <p class="price"><i>¥</i>{{ item.price }}</p>
        </RouterLink>
    </li>
</ul>
</template>

<style lang='scss' scoped>
.good-list{
    height: 406px;
    display: flex;
    justify-content: space-between;
    li{
        width: 306px;
        background: #f0f9f4;
        transition: all .5s;
        &:hover{
            transform: translate3d(0,-3px,0);
            box-shadow: 0 3px 8px rgb(0 0 0 /20%);
        }
        img{
            widows: 306px;
        }
        p{
            font-size: 22px;
            padding-top: 12p;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            
        }
        .price{
                color: $priceColor;
            }

    }
}


</style>
