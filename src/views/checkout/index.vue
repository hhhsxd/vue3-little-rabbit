<script setup>
import { getCheckoutAPI,getOrderAPI } from '@/apis/checkout';
import router from '@/router';
const checkInfo=ref({})
//定义地址
const curAddress=ref({})

const getCheckout=async()=>{
    const res=await getCheckoutAPI()
    checkInfo.value=res.result
    curAddress.value=checkInfo.value.userAddresses.find(item=>item.isDefault===0)
}

onMounted(()=>getCheckout())

//切换地址
const activeAddress=ref({})
const switchAddress=(item)=>{
    activeAddress.value=item
}
//地址栏出现消失
const showDialog=ref(true)
const confirm=()=>{
    showDialog.value=false
    //确定后把选择的地址渲染到页面
    curAddress.value=activeAddress.value
}
//创建订单，生成订单id，以跳转到支付页面
const createOrder=async ()=>{
   const res= await getOrderAPI({
      buyerMessage: '',
      deliveryTimeType:1,
      payChannel:1,
      payType: 1,
      addressId: curAddress.value.id,
      goods: checkInfo.value.goods.map((item)=>{
        return{
            skuId:item.skuId,
            count:item.count
        }
      })
    })
    //就是要获得生成的订单号id
    const orderId=res.result.id
        //是路由跳转路径后面接的params所以route可以访问到
    router.push({
        path:'/pay',
        query:{
            id:orderId
        }
    })

}

</script>
<template>
    <div class="xtx-checkout">
        <div class="container">
            <div class="wrapper">
                <h3 class="box-title"> 收货地址</h3>
                <div class="box-body">
                    <div class="address">
                        <div class="text">
                           <div class="none" v-if="!curAddress">
                            您需要添加收货地址才能结算
                           </div>
                           <ul v-else>
                            <li>收货人：{{ curAddress.receiver }}</li>
                            <li>联系方式：{{ curAddress.contact }}</li>
                            <li>收货地址：{{ curAddress.fullLocation }} {{ curAddress.address }}</li>
                           </ul>
                        </div>
                        <div class="action">
                            <el-button @click="showDialog=true">切换地址</el-button>
                            <el-button>添加地址</el-button>
                        </div>
                    </div>
                </div>
                <!-- 商品信息 -->
                <h3 class="box-title">商品信息</h3>
                <div class="box-body">
                    <table class="goods">
                        <thead>
                            <tr>
                                <th width="520px">商品信息</th>
                                <th width="170px">单价</th>
                                <th width="170px">数量</th>
                                <th width="170px">小计</th>
                                <th width="170px">实付</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="i in checkInfo.goods" :key="i.id">
                                <td>
                                    <a href="javascript:;" class="info">
                                        <img :src="i.picture" alt="">
                                        <div class="right">
                                            <p>{{ i.name }}</p>
                                            <p>{{ i.attrsText}}</p>
                                        </div>
                                    </a>
                                </td>
                                <td>&yen;{{ i.price }}</td>
                                <td>{{ i.price }}</td>
                                <td>&yen;{{ i.totalPrice }}</td>
                                <td>&yen;{{ i.totalPayPrice }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3 class="box-title">配送时间</h3>
                <div class="box-body">
                    <el-button class="my-btn active" >不限送货时间，周一至周日</el-button>
                    <el-button class="my-btn" >工作日送货，周一至周五</el-button>
                    <el-button class="my-btn">双休日、假日送货，周六至周日</el-button>
                </div>
                <h3  class="box-title">支付方式</h3>
                <div class="box-body">
                    <el-button class="my-btn active" >在线支付</el-button>
                    <el-button class="my-btn">货到付款</el-button>
                    <span>货到付款需付5元手续费</span>
                </div>
                <h3 class="box-title">金额明细</h3>
                <div class="box-body total">
                    <dl>
                        <dt>商品件数：</dt>
                        <dd>{{ checkInfo.summary?.goodsCount }}</dd>
                    </dl>
                    <dl>
                        <dt>商品总价：</dt>
                        <dd>&yen;{{checkInfo.summary?.totalPrice.toFixed(2)}}</dd>
                    </dl>
                    <dl>
                        <dt>运<i></i>费：</dt>
                        <dd>&yen;{{ checkInfo.summary?.postFee.toFixed(2) }}</dd>
                    </dl>
                    <dl>
                        <dt>应付总额：</dt>
                        <dd class="price">&yen;{{ checkInfo.summary?.totalPayPrice.toFixed(2) }}</dd>
                    </dl>
                </div>
                <div class="submit">
                <el-button type="primary" size="large" @click="createOrder">提交订单</el-button>
                </div>
        </div>
    </div>
    </div>
    <el-dialog title="切换收货地址" width="30%" center v-model="showDialog">
        <div class="addressWrapper">
            <div class="text item" v-for="i in checkInfo.userAddresses" :key="i.id"  @click="switchAddress(i)" :class="{active:activeAddress.id===i.id}">
             <ul>
                    <li><span>收货人:</span>{{ i.receiver }}</li>
                    <li><span>联系方式:</span>{{ i.contact }}</li>
                    <li><span>收货地址:</span>{{ i.fullLocation+i.address }}</li>
                </ul> 
            </div>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button>取消</el-button>
                <el-button type="primary" @click="confirm">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style lang='scss' scoped>
.xtx-checkout{
    margin-top: 20px;
    .wrapper{
        background-color:  #fff;
        padding: 0 20px;
        .box-title{
            font-size: 16px;
            font-weight: 400;
            padding-left: 10px;
            line-height: 70px;
            border-bottom: 1px solid #f5f5f5;
        }
        .box-body{
            padding: 20px 0;
        }
    }
}
.goods{
    width: 100%;
    border-collapse: collapse;
    a{
        display: flex;
        text-align: left;
    }
    img{
        width: 70px;
        height: 70px;
        margin-right:20px;
    }
    .right{
        line-height: 24px;
        p{
            &:last-child{
                color:#999;
            }
        }
    }
    tr{
        th{
            font-weight: 400;
        }
       td ,th{
            text-align: center;
            padding: 20px;
            border-bottom: 1px solid #f5f5f5;
            &:first-child{
                border-left: 1px solid #f5f5f5;
            }
            &:last-child{
                border-right: 1px solid #f5f5f5;
            }
        }
    }
}
.my-btn{
    width: 228px;
    height: 50px;
    border: 1px solid #e4e4e4;
   
    margin-right: 25px;
    color: #666;
    &.active,
    &:hover{
      color  : #27ba9b;
      border: 1px solid #27ba9b;
    }
    
}
.total{
    dl{
        display: flex;
        justify-content: flex-end;
        line-height: 50px;
        i{
            display: inline-block;
            width:2em;
        }
        dd{
            width:24px;
            text-align: right;
            padding-right: 100px;
            &.price{
                font-size: 20px;
                color: $priceColor;
            }
        }
    }
}
.submit{
    text-align: right;
    padding: 60px;
    border-top: 1px solid #f5f5f5;
}
.addressWrapper{
    max-height: 500px;
    overflow-y:auto ;
}
.text{
    min-height: 90px;
    display: flex;
    align-items: center;
    border:1px solid #f5f5f5;
    margin-bottom: 10px;
    cursor:pointer;
    &.active,
    &:hover{
            border-color: $xtxColor;
            background-color: lighten($xtxColor,50%);
        }
        >ul{
            padding: 10px;
            font-size: 14px;
            line-height: 30px;
        }
        
    
    }

</style>
