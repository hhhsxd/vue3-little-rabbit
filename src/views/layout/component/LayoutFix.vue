<script setup>
 import {useScroll} from '@vueuse/core'
 import { useCategoryStore } from '@/stores/category';
 const {y}=useScroll(window)
//因为页面已加载完成，这里直接接收store里面存储好的state
 const categorystore=useCategoryStore()


</script>
<template>
  <header class="app-header-sticky " :class="{ show:y>78}">
    <div class="container">
        <RouterLink class="logo" to="/"></RouterLink>
        <ul class="app-header-nav">
            <li class="home">
                <RouterLink  to="/">首页</RouterLink>
            </li>
            <li v-for="item in categorystore.categoryList" :key="item.id">
                <RouterLink  :to="`/category/${item.id}`" active-class="active">{{ item.name }}</RouterLink>
            </li>
        </ul>
        <div class="right">
            <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
        </div>
    </div>
  </header>
</template>

<style lang='scss' scoped>
.app-header-sticky{
    position: fixed;
    height: 80px;
    width:100%;
    background: #fff;
    z-index: 1000;
    border-bottom: 1px solid #e4e4e4;
    transform: translateY(-100%);
    opacity: 0;
    
    .container{
        display: flex;
        .logo{
            width: 200px;
            height: 80px;
            background: url('@/assets/images/logo.png') no-repeat center/contain;
            background-size: 160px auto;
            &:hover{
                border:none;
            }
        }
        .app-header-nav{
            display: flex;
            width: 820px;
            height: 80px;
            margin-left: 40px;
            align-items: center;
            }
        }
        .right{
               width: 220px;
              height: 32px;
              border-left: 2px solid $xtxColor;
              padding-left: 40px;
              text-align: center;
              line-height: 32px;
             position: relative;
             top:22px;
            }
    }
             a {
                      margin-right: 40px;
                    font-size: 16px;
                    line-height: 32px;
                    height: 32px;
                    display: inline-block;
                &:hover{
                    border-bottom: 1px solid $xtxColor;
                    }
                }

.show{
    transition:all 0.3s linear;
    transform: none;
    opacity: 1;
}

</style>
