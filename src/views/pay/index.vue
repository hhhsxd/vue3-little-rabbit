<script setup>
import {getPayAPI} from "@/apis/pay"
import {useRoute} from 'vue-router'
import {useCountdown} from "@/composables/useCountdown"
//调用路由获取跳转/pay页面传送过来的订单id
const route=useRoute()
const {formatTime,start} =useCountdown()
const payInfo=ref({})
const getPayInfo=async ()=>{
    const res=await getPayAPI(route.query.id)
    payInfo.value=res.result
    start(res.result.countdown)
    
}

onMounted(()=>getPayInfo())
// 支付地址
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net/'
const backURL = 'http://localhost:5173/paycallback'//支付后的回调页
const redirectUrl = encodeURIComponent(backURL)
const payUrl = `${baseURL}pay/aliPay?orderId=${route.query.id}&redirect=${redirectUrl}`
</script>
<template>
    <div class="xtx-pay">
        <div class="container">
                <div class="pay-info">
                    <span class="icon iconfont icon-queren2 "></span>
                    <div class="tips">
                        <p>订单提交成功！请尽快完成支付。</p>
                        <p>支付还剩<span>{{ formatTime }}</span> ，超时后会取消订单</p>
                    </div>
                    <div class="amount">
                        <span>应付总额:</span>
                        <span>&yen;{{ payInfo.payMoney }}</span>
                    </div>
                </div>
                <div class="pay-type">
                    <p class="head">请选择以下支付方式付款</p>
                    <div class="item">
                        <p>支付平台</p>
                        <a href="#" class="btn wx"></a>
                        <a :href="payUrl" class="btn alipay"></a>
                    </div>

                    <div class="item">
                        <p>支付方式</p>
                        <a href="#" class="btn">招商银行</a>
                        <a href="#" class="btn">工商银行</a>
                        <a href="#" class="btn">建设银行</a>
                        <a href="#" class="btn">农业银行</a>
                        <a href="#" class="btn">交通银行</a>
                    </div>
                </div>
            </div>
    </div>
</template>

<style lang='scss' scoped>
.xtx-pay{
    margin-top: 20px;
    .pay-info{
        background-color: #fff;
        display: flex;
        align-items: center;
        height: 240px;
        padding: 0 80px;
        .icon{
            font-size: 80px;
            color: #1dc779;
        }
        .tips{
            padding-left: 10px;
            flex: 1;
            p{
                &:first-child{
                    font-size: 20px;
                    margin-bottom: 5px;
                }
                &:last-child{
                    font-size:16px;
                    color:#999;
                }
            }
        }
        .amount{
            span{
                &:first-child{
                    color:#999;
                    font-size: 16px; 
                    margin-right: 10px;
                }
                &:last-child{
                    font-size: 20px;
                    color: $priceColor;
                }
            }
        }
    }
    .pay-type{
        margin-top: 20px;
        background-color: #fff;
        padding-bottom: 70px;
        p{
            height: 70px;
            line-height: 70px;
            padding-left: 30px;
            font-size: 16px;
            &.head{
                border-bottom: 1px solid #f5f5f5;
            }
        }
    }
    .btn{
        display: inline-block;
        width: 150px;
        height: 50px;
        border:1px solid #e4e4e4;
        text-align: center;
        line-height: 48px;
        margin-left: 30px;
        color: #666;
        &.active,
        &:hover{
            border-color:$xtxColor ;
        }
        &.wx{
            background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg) no-repeat center / contain;;
        }
        &.alipay{
            background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b6b02396368c9314528c0bbd85a2e06.png) no-repeat center / contain;
        }
       
        
    }
}

</style>
