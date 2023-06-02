<script setup>
import { useCartStore } from '@/stores/cartlist';
const cartstore=useCartStore()
//计算总价

</script>
<template>
   <div class="header-cart-icon">
    <a href="javascript:;" class="curr">
        <i class="iconfont icon-cart"></i>
    <em>{{ cartstore.cartlist.length }}</em>
    </a>
    <div class="layer">
       
         <ul class="list">
            <li v-for="goods in cartstore.cartlist" :key="goods.id">
                <RouterLink :to="`/detail/${goods.id}`">
                      <img :src="goods.picture" alt="">
                      <div class="center">
                         <p class="title ellipsis">{{ goods.name }}</p>
                <p class="desc ellipsis">{{ goods.attrsText }}</p>
                      </div>
               <div class="right">
                   <p class="price">&yen;{{ goods.price }}</p>
                <p class="count">×{{goods.count}}</p>
               </div>
                </RouterLink>
              <i class="iconfont icon-close-new" @click="cartstore.delCart(goods.skuId)"></i>
            </li>
        </ul>
     
          <div class="footer">
        <div class="left">
             <p class="total">共{{cartstore.allCount}}件商品</p>
        <p class="price">&yen;{{ cartstore.allCost.toFixed(2) }}</p>
        </div>
       
        <el-button type="primary" size="large" @click="$router.push('/cartlist')">去购物车结算</el-button>
    </div>
    </div>
 
    
   </div>
</template>

<style lang='scss' scoped>
.header-cart-icon{
    &:hover{
        .layer{
            opacity: 1;
            transform: none;
        }
    }
    z-index: 500;
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

    .layer{
        opacity: 0;
        height:400px ;
        width:400px;
        position: absolute;
        top:50px;
        right: 0;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        transform: translateY(-200px) scale(1,0);
        transition: all .4s .2s;
        &::before{
            content: "";
            width: 20px;
            height: 20px;
            position: absolute;
            right:14px;
            top: -10px;
            background-color: #fff;
            transform: scale(0.6) rotate(45deg);
            box-shadow: -3px -3px 5px rgba(0,0,0,.1);
        }
        .list{
            height: 310px;
            overflow: auto;
            padding: 0 10px;
            li{  
                border-bottom: 1px solid #f5f5f5;
                position: relative;
                i{
                    color: #666;
                    position: absolute;
                    bottom: 38px;
                    right: 0;
                    transition: all .3s;
                    opacity: 0;
                }
                &:hover{
                    i{
                        opacity: 1;
                        cursor: pointer;
                    }
                }
                a{
                     display: flex;
                align-items: center;
                
              
                padding: 10px 0 ;
                 img{
                width: 80px;
                height: 80px;
              
            }
           .center{
            padding: 0 10px;
            width: 200px;
            .title{
            font-size: 16px;
                text-align: left;
           }
           .desc{
            color: #999;
            padding-top: 5px;
            text-align: left;
           }
           }
           .right{
            width:100px;
            padding-right: 20px;
            text-align: center;
            font-size: 16px;
          
            .count{
                color: #999;
                margin-top: 5px;
            }

    }
           
                }
               
            }
           
        }
        .price{
                color: $priceColor;
          
            }
        .footer{
            background-color: #f8f8f8;
            height: 70px;
            width: 100%;
            position: absolute;
            left: 0;
            bottom:0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:10px;
            .left{
                padding-left: 10px;
                 .total{
                color:#999;
            }
            .price{
                font-size: 18px;
            }
            }
           
        }
}
    }


 
</style>
