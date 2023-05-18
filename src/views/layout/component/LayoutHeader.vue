<script setup>
import { useCategoryStore } from '@/stores/category';
//因为页面已加载完成，这里直接接收store里面存储好的state

const categorystore=useCategoryStore()

</script>

<template>
 <header class="app-header">
    <div class="container">
        <h1 class="logo">
<RouterLink to="/"></RouterLink>
        </h1>      
    <ul class="header-nav">
        <li v-for="item in categorystore.categoryList" :key="item.id">
            <RouterLink :to="`/category/${item.id}`" active-class="active">{{ item.name }}</RouterLink>
        </li>
 
    </ul>
    <div class="header-search">
        <i class="iconfont icon-search"></i>
   
    <input type="text" placeholder="搜一搜">
     </div>
     <div class="header-cart">
        <RouterLink to="/">
            <i class="iconfont icon-cart "></i> 
            <em>3</em>
        </RouterLink>
    </div>
    </div>
 </header>
</template>

<style scoped lang="scss">
.app-header{
    background:#fff;
   .container{

    display: flex;
    align-items: center;
    .logo{
     a  {
        width: 200px;
        display:block;
        height: 132px;
        background: url(@/assets/images/logo.png) no-repeat center 18px/contain;
        }
    
    }
    .header-nav{
        display: flex;
        width: 820px;
        padding-left: 40px;
        li{
            margin-right: 40px;
            width: 38px;//只是更准确
            text-align: center;
            a{
                font-size: 16px;
                height: 32px;//这里设置了固定高度Hover的时候不会抖动
                line-height: 32px;
                display: inline-block;
                &:hover{
                    color: $xtxColor;
                    border-bottom: 1px solid $xtxColor;
                }
                
            }
            
        }
    }
    .header-search{
        border-bottom: 1px solid #e7e7e7;
        height: 32px;
        line-height: 32px;
        width: 170px;
        i{
            font-size: 18px;
            margin-left: 5px;
        }
        input{
            width: 140px;
            padding-left: 5px;
            color: #666;
        }
    }
    .header-cart{
        width: 50px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        position:relative;
        .icon-cart{
            font-size: 22px;
        }
        em{
            position: absolute;
            top: 0;
            right:0;
            padding: 1px 6px;
            font-size: 12px;
            line-height: 1;
            border-radius: 10px;
            font-family: Arial, Helvetica, sans-serif;
            background-color: $helpColor;
            color: #fff;
        }
    }
   }
}
</style>