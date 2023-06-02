<script setup>
//引入的封装组件
import {useBanner} from'./composables/uesBanner'
import {useCategory} from './composables/useCategory'
import GoodsItem from '../home/components/GoodsItem.vue';
const {bannerList}=useBanner()
const {categoryList}=useCategory()


</script>
<template>
    <div class="top-category">
        <div class="container ">
        <!--面包屑 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{ categoryList.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 轮播图 -->
        <div class="home-banner">
       <el-carousel height="500px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="">
        </el-carousel-item>
       </el-carousel>
    </div>
    <!-- 二级商品 -->
    <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
            <li v-for="i in categoryList.children" :key="i.id">
            <router-link :to="`/category/sub/${i.id}`">
                <img v-img-lazy="i.picture" alt="">
                <p>{{ i.name }}</p>
            </router-link>
            </li>
        </ul>
    </div>
    <div class="ref-goods" v-for="item in categoryList.children" :key="item.id">
        <div class="head">
            <h3>-{{ item.name }}-</h3>
        </div>
        <div class="body">
            <GoodsItem v-for="i in item.goods" :goods="i" :key="i.id"/>
        </div>
    </div>
        </div>
    </div>

</template>

<style lang='scss' scoped>
.top-category{

   .bread-container{
    padding: 25px 0;
   }
   h3{
    font-size: 28px;
    color: #666;
    font-weight: 400;
    text-align: center;
    line-height: 100px;
   }
   .sub-list{
    margin-top: 20px;
    background-color: #fff;
    ul{
        display: flex;
        padding: 0 32px;
        flex-wrap: nowrap;
        li{
            width: 168px;
            height: 160px;
            a{
                display: block;
                text-align: center;
                img{
                    width: 100px;
                    height: 100px;
                }
                p{
                    line-height: 40px;
                }
                &:hover{
                    color: $xtxColor;
                }
            }
        }
    }
   }
   .ref-goods{
    background-color: #fff;
    margin-top: 20px;
    position: relative;
   .body{
    display: flex;
    justify-content: space-around;
    padding: 0 40px 30px;
   }
   }
   
}
.home-banner{
    height: 500px;
    width:1240px;
        img{
        width: 100%;
        height: 500px;
    }
    
}
</style>
