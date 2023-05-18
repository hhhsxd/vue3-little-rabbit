<script setup>
import HomePanel from './HomePanel.vue';
import {getHotAPI} from '@/apis/hot.js'
import {onMounted,ref} from 'vue'
const hotList=ref([])
const getHotList=async ()=>{
    const res=await getHotAPI()
    hotList.value=res.result
}
onMounted(()=>getHotList())
</script>
<template>
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过"/>
    <ul class="hot-list">
        <li  v-for="item in hotList" :key="item.id">
            <router-link to="/" >
                 <img v-img-lazy="item.picture" alt="">
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
            </router-link>
           
        </li>
    </ul>
</template>

<style lang='scss' scoped>
.hot-list{
    height:426px;
    display: flex;
    justify-content: space-between;
    li{
        width: 306px;
        height: 406px;
        transition: all .5s;
        &:hover{
            transform: translate3d(0,-3px,0);
            box-shadow: 0 3px 8px rgb( 0 0 0 /20%);
        }
        
        p{
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
        }
        .desc{
            color: #999;
            font-size: 18px;
        }
    }

}

</style>
