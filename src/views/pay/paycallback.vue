<script setup>
import { useRoute } from 'vue-router';
import { getPayAPI } from '@/apis/pay';
const route=useRoute()
const payInfo=ref({})
const getPay=async ()=>{
    const res=await getPayAPI(route.query.orderId)
    payInfo.value=res.result
    console.log(payInfo.value.payMoney)
}
onMounted(()=>getPay())
</script>
<template>
    <div class="xtx-pay-callback">
        <div class="container">
            <div class="pay-result">
                <span class="icon iconfont icon-queren2 green" v-if="$route.query.payResult"></span>
                <span class="icon iconfont icon-shanchu red" v-else></span>
                <p class="title">订单支付{{ $route.query.payResult==="true"?'成功':'失败' }}</p>
                <p class="tip">我们将尽快为您发货，收货期间请保持手机畅通</p>
                <p>支付方式：<span>支付宝</span></p>
                <p >支付金额：<span class="price">&yen;{{ payInfo.payMoney?.toFixed(2)}}</span></p>
           
            <div class="btn">
            <el-button type="primary">查看订单</el-button>
            <el-button>进入首页</el-button>
            </div>
            <p class="alert">
                <span class="iconfont icon-tip"></span>
                温馨提示：小兔鲜儿不会以订单异常、系统升级为由要求您点击任何网址进行退款操作，保护资产、谨慎操作。
            </p>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.xtx-pay-callback{
    margin-top: 20px;
    .pay-result{
        display: flex;
        background-color: #fff;
        text-align: center;
        flex-direction: column;
        padding: 100px 0;
        .icon{
            font-size: 100px;
         &.green{
            color:#1dc779;
         }
         &.red{
            color:$priceColor;
         }
        }
        p{
            line-height: 40px;
            font-size: 16px;
        & .title{
            font-size: 24px;
        }
        &.tip{
            color:#999;
        }
        .price{
            color: $priceColor;
        }
        } 
        .btn{
            margin-top: 50px;
            button{
                display: inline-block;
                width: 150px;
                height: 50px;
                font-size: 20px;
            }
        }
        .alert{
            margin-top: 50px;
            color: #999;
            font-size: 12px;
        }
       
    }
}

</style>
