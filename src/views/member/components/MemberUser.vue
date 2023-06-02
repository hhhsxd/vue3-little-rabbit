<script setup>
import GoodsItem from '@/views/home/components/GoodsItem.vue';
import {getLikeAPI} from "@/apis/user"
import { useUserStore } from '@/stores/userinfo';
const likes=ref([])
const getlike=async()=>{
    const res=await getLikeAPI({limit:4})
    likes.value=res.result
    console.log(res.result);
}
const {userInfo}=useUserStore()
onMounted(()=>getlike())
</script>
<template>
    <div class="xtx-member">
        <div class="user-meta">
            <img :src="userInfo.avatar" alt="">
            <h4 class="nickname">{{ userInfo.nickname }}</h4>
        </div>
        <div class="item">
            <a href="#">
                <span class="iconfont icon-hy"></span>
                <p>会员中心</p>
            </a>
            <a href="#">
                <span class="iconfont icon-aq"></span>
                <p>安全设置</p>
            </a>
            <a href="#">
                <span class="iconfont icon-dw"></span>
                <p>地址管理</p>
            </a>
        </div>
    </div>
    <div class="guess-like">
        <div class="home-panel">
            <div class="header">
                <h4>猜你喜欢</h4>
            </div>
            <div class="goods-list">
                <GoodsItem v-for="i in likes" :key="i.id" :goods="i"></GoodsItem>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.xtx-member{
    display: flex;
    height: 132px;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background: url(@/assets/images/center-bg.png) no-repeat center / cover;

    img{
        width: 85px;
        height: 85px;
        border-radius:50% ;
        margin-right: 45px;
    }
    
    .nickname{
        display: inline-block;
        font-weight: 400;
        font-size: 18px;
        color:#fff;
    }
.item{
    display: flex;
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 16px;
    margin-right: 80px;
    &:last-child{
        margin-right:0;
    }
    .iconfont{
        font-size: 32px;
    }
    p{
       line-height: 32px;
    }
    
  }
   
}

}
.guess-like{
    margin-top: 40px;
    .home-panel{
        padding: 0 20px;
        height: 400px;
        .header{
        height: 66px;
        border-bottom: 1px solid #f5f5f5;
         h4{
        font-weight: 400;
        font-size: 22px;
         }
        }
    .goods-list{
        display: flex;
        justify-content: space-around;
       }
    }
   
}
</style>
