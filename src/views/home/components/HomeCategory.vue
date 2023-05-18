<script setup>
import { useCategoryStore } from '@/stores/category';
const categoryStore=useCategoryStore()

</script>
<template>
 <div class="home-category">
    <ul class="menu">
        <li v-for="item in categoryStore.categoryList" :key="item.id">
            <RouterLink to="/">{{ item.name }}</RouterLink>
            <RouterLink to="/" v-for="i in item.children.slice(0,2)" :key="i.id" > {{ i.name }}</RouterLink>
        <div class="layer">
            <h4>分类推荐<small>根据您的购买或浏览记录推荐</small></h4>
            <ul>
                <li v-for="g in item.goods" :key="g.id">
                <RouterLink to="/" >
                    <img :src="g.picture" alt="">
                    <div class="info">
                        <p class="name sllipsis-2">{{ g.name }}</p>
                        <p class="desc ellipsis">{{ g.desc }}</p>
                        <p class="price"><i>¥</i>{{ g.price }}</p>
                    </div>
                </RouterLink>
                </li>
            </ul>
        </div>
        </li>
    </ul>
 </div>
</template>

<style lang='scss' scoped>
.home-category{
    height:500px; 
    width:250px;
    background-color: rgba(0,0,0,0.8);
    z-index: 999;
    position: relative;
    .menu{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        position: relative;
        li{
            height: 55px;
            line-height: 55px;
            padding-left: 30px;
            &:hover{
               background: $xtxColor;
            }
             a{
            color:#fff;
            margin-left: 4px;
            &:first-child{
                font-size: 16px;
            }
        }
        .layer{
            width: 990px;
            height: 500px;
            background-color:rgba(255,255,255,0.8);
            position: absolute;
            left: 250px;
            top: 0;
            display: none;
            padding: 0 15px;
            h4{
                font-size: 20px;
                line-height: 80px;
                small{
                    margin-left: 10px;
                    font-size: 16px;
                    color: #666;
                }
            }
            ul{
                display: flex;
                flex-wrap: wrap;
                li{
                    width: 310px;
                    height: 120px;
                    margin-right: 15px;
                    margin-bottom: 15px;
                    border: 1px solid #eee;
                    border-radius: 4px;
                    background-color: #fff;
                    padding-left: 0;
                    &:nth-child(3n){
                     margin-right: 0;
                    
                    }
                    &:hover{
                            background: #e3f9f4;
                        
                        }
                    a{
                        display: flex;
                        width: 100%;
                        height: 100%;
                        align-items: center;
                        padding: 10px;
                        img{
                            width: 95px;
                            height: 95px;
                        }
                        .info{
                            padding-left:10px ;
                            line-height: 24px;
                            overflow: hidden;
                         .name{
                            color: #666;
                            font-size: 16px;
                        }
                        .desc{
                            color: #999;
                        }
                        .price{
                            font-size: 22px;
                            color: $priceColor;
                            i{
                                font-size: 16px;
                            }
                        }}
                       
                    }
                }
            }
        }
            &:hover{
            .layer{
                display: block;
            }
        }
        }
       
    
    }
}

</style>
