<script setup>
import {getBannerAPI} from '@/apis/banner'
import {onMounted,ref} from 'vue'
const bannerList=ref([])
const  getbanner=async()=>{
    const res=await getBannerAPI()
    bannerList.value=res.result
}
onMounted(()=>{
    getbanner()
})
</script>
<template>
    <div class="home-banner">
       <el-carousel height="500px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="">
        </el-carousel-item>
       </el-carousel>
    </div>
</template>

<style lang='scss' scoped>
.home-banner{
    height: 500px;
    width:1240px;
    position:absolute;
    left: 0;
    top: 0;
    z-index: 99;//设置z-index不起作用要考虑z-index是需要在position不为static的元素上作用的
     
        img{
        width: 100%;
        height: 500px;
    }
    
}

</style>
