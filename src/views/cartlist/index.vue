<script setup>
import {useCartStore} from '@/stores/cartlist.js'
const cartstore=useCartStore()


</script>
<template>
   <div class="xtx-cart-list">
    <div class="container">
        <div class="cart">
           <table>
            <thead>
                <tr>
                    <th width="120px">
                        <!-- 传入的selected状态是checkbox的值 -->
                        <el-checkbox :modelValue="cartstore.isAll" @change="cartstore.allselected"/>
                    </th>
                    <th width="400px">商品信息</th>
                    <th width="220px">单价</th>
                    <th width="180px">数量</th>
                    <th width="180px">小计</th>
                    <th width="140px">操作</th>

            </tr>

            </thead>
            <tbody>
                <tr v-for="i in cartstore.cartlist" :key="i.id" class="item" >
                  <td>
                <!-- 这里因为需要在选择状态改变之后调用接口，所以使用v-model语法糖的一般模式自定义@ -->
                    <el-checkbox :modelValue="i.selected" @change="(selected)=>cartstore.singleCheck(i.skuId,selected)"/>
                  </td>  
                  <td class="goods">
                    <img :src="i.picture" alt="">
                     <p class="title ellipsis">{{ i.name }}</p>
                  </td>
                     <td>
                     <p>&yen;{{ i.price }}</p>
                    </td>
                     <td>
                         <el-input-number v-model="i.count"></el-input-number>
                    </td>
                    <td>
                         <p>&yen;{{(i.price*i.count).toFixed(2)}}</p>
                    </td>
                    <td>
                         <el-popconfirm title="确认删除吗？" confirm-button-text="确认" cancel-button-text="取消" @confirm="cartstore.delCart(i.skuId)">
                            <template #reference>
                                <el-button>删除</el-button>
                            </template>
                         </el-popconfirm>
                    </td>
                </tr>
                <tr v-if="cartstore.cartlist.length===0">
                    <td colspan="6">
                        <!-- colspan规定这个td占多少个宽度的单元格 -->
                        <div class="cart-none">
                            <el-empty description="购物车空空滴">
                                <el-button type="primary"> 
                                    随便逛逛
                                </el-button>
                            </el-empty>
                        </div>
                    </td>
                </tr>
            </tbody>
           </table>
        </div>
        <!-- 操作栏 -->
        <div class="action">
            <div class="batch">
                共{{cartstore.allCount}}件商品，已选择{{cartstore.selectCount}}件，商品合计：
                <span class="red">&yen;{{ cartstore.selectCost.toFixed(2)}}</span>
            </div>
            <div class="total">
                <el-button size="large" type="primary" @click="$router.push('/checkout')">
                    结算
                </el-button>
            </div>
        </div>
    </div>
   </div>
</template>

<style lang='scss' scoped>
    .xtx-cart-list{
        margin-top: 20px;
      
       .cart{
        background-color: #fff;
        table{
            th,td{
                padding: 10px;
                border-bottom: 1px solid #f5f5f5;
                &:first-child{
                   padding-left:30px ;
                   color:#999;
                   text-align: left;
                }
            }
            th{
                font-weight: 400;
                font-size: 16px;
                line-height: 50px;
            }
            tbody{
                td{
                    text-align: center;
                }
                .goods{
                    display: flex;
                    align-items: center;
                    img{
                        width: 100px;
                        height: 100px;
                    }
                    .title{
                        padding-left: 20px;
                        font-size: 16px;
                        width: 280px;
                        text-align: left;
                    }
                }
            }
        }
       }
      .cart-none{
//el-empty是flex
       padding: 120px 0;
} 
.action{
    height: 80px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
    margin-top: 20px;
    font-size: 16px;
    .batch{
      .red{
        font-size: 18px;
        margin-left: 20px;
        font-weight: 700;
        color: $priceColor;
      }
    }
 
   
}
    }

</style>
