<script setup>
import {getUserOrderAPI} from '@/apis/order'
import {useCountdown} from "@/composables/useCountdown"
const {formatTime,start} =useCountdown()//格式化定时器
const orderlist=ref([])
//因为传入的params会有改变，所以在外声明为ref
const params=ref({
    orderState:0,
        page:1,
        pageSize:2
})
//定义tab栏
const tabType=[
    {name:'all',label:'全部订单'},
    {name:'unpay',label:'待付款'},
    {name:'deliver',label:'待发货'},
    {name:'receive',label:'待收货'},
    {name:'comment',label:'待评价'},
    {name:'complete',label:'已完成'},
    {name:'cancel',label:'已取消'}
]
//待付款倒计时自定义指令
// const vTime={
//     mounted:(el,binding)=>{
//             start(binding.arg.countdown)
//     }
// }
//另外尝试待付款定时器
//1.查找所有订单中未付款的订单放在一个集合内
//2.循环调用绑定定时器规格式化
let suspendlist=ref([])

//在外声明数据总数
const total=ref(0)
const getOrder=async ()=>{
    const res=await getUserOrderAPI(params.value)
    orderlist.value=res.result.items
    total.value=res.result.counts
}
//未付集合
const getsuspend=async()=>{
    params.value.orderState=1
   let res=await getUserOrderAPI(params.value)
    suspendlist.value=res.result.items
    if(res.result.pages>1){
        for(let i=1;i<res.result.pages;i++){
            params.value.page++
            res= await getUserOrderAPI(params.value)
            suspendlist.value.push([...res.result.items])
        }
       
    }
    // console.log(suspendlist)
    if(suspendlist){
         for(let j=0;j<suspendlist.value.length;j++){
        console.log(suspendlist.value[j]);
        start(suspendlist.value[j].countdown)
     }
    }
}
//定义切换tab栏显示不同的orderstate
const tabChange=(type)=>{
    // console.log(type);//传入的就是el-tab接受的序数值
    params.value.orderState=type
    getOrder()
}
//定义切换页码
const pageChange=(pages)=>{
    // console.log(page); 传过来的就是页码
    params.value.page=pages
    getOrder()
}
const formatState={
    1:'待付款',
    2:'待发货',
    3:'待收货',
    4:'待评价',
    5:'已完成',
    6:'已取消'
}
    
const format=(state)=>{
    return formatState[state]
}


onMounted(()=>{
    getOrder()
    getsuspend()
   
})
</script>
<template>
    <div class="xtx-member-order" >
        <el-tabs @tab-change="tabChange">
            <el-tab-pane v-for="i in tabType" :key="i.name" :label="i.label"/>
            <div class="wrap">
                <div class="empty" v-if="orderlist?.length===0">
                    <el-empty description="暂无订单，去主页瞧瞧吧~"/>
                </div>
                <div v-else>
                    <!-- 循环每一个订单 -->
                <div class="item" v-for="item in orderlist" :key="item.id">
                        <div class="head">
                           <span>下单时间：{{item.createTime }}</span>
                           <span>订单编号：{{item.id }}</span> 
                           <span v-if="item.orderState===1" class="downtime" >
                            <i class="iconfont icon-down-time"></i>
                            <b>付款截至:<span>{{ formatTime }}</span></b>
                        </span>
                        </div>
                        <div class="goods">
                            <div class="goodsdesc">
                                  <ul>
                                <!-- 循环每个订单里的每个商品 -->
                            <li v-for="i in item.skus" :key="i.id">
                            <router-link to="/">
                            <img :src="i.image" alt="">
                            </router-link>
                            <div class="desc">
                                <p class="name ellipsis">{{ i.name }}</p>
                                <p class="sku ellipsis">{{ i.attrsText }}</p>
                            </div>
                            <div class="price">￥{{ i.realPay?.toFixed(2) }}</div>
                            <div class="count">⨯{{ i.quantity }}</div>
                            </li>
                            </ul>
                            </div>
                          
                            <div class="state">
                                <!-- 订单状态不同渲染不同操作 -->
                                <p>{{ format(item.orderState)}}</p>
                                <p v-if="item.orderState===3"><a href="#">查看物流</a></p>
                                <p v-if="item.orderState===4"><a href="#">评价商品</a></p>
                                <p v-if="item.orderState===5"><a href="#">查看评价</a></p>
                            </div>
                            <div class="total">
                                <p class="cost">￥{{item.payMoney.toFixed(2)}}</p>
                                <p>（含运费：￥{{item.postFee.toFixed(2)}}）</p>
                                <p class="payway">在线支付</p>
                            </div>
                            <div class="action">
                                <el-button v-if="item.orderState===1" type="primary" size="small">立即付款</el-button>
                                <el-button v-if="item.orderState===3" type="primary" size="small">确认收货</el-button>
                                <p> <a href="#">查看详情 </a></p>
                                <p v-if="[2,3,4,5].includes(item.orderState)"><a href="#">再次购买 </a></p>
                                <p v-if="[4,5].includes(item.orderState)"><a href="#">申请售后</a></p>
                                <p v-if="item.orderState===1"><a href="#">取消订单</a></p>
                            </div>
                        </div>
                </div>
                 <div class="pagination-container">
                <el-pagination background layout="prev,pager,next" :total="total" :pageSize="params.pageSize" @current-change="pageChange" />
                </div>
                </div>
            </div>
        </el-tabs>
    </div>
</template>

<style lang='scss' scoped>
.xtx-member-order{
    padding: 10px 20px;
   .wrap{
    min-height: 500px;
        .empty{
            min-height: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

   }
    .pagination-container{
    display: flex;
    justify-content: center;
   
}
}
.item{
    .head{
        height: 50px;
        background-color: #f5f5f5;
        line-height: 50px;
        padding: 0 20px;
        span{
            margin-right: 20px;
            &.downtime{
                margin-right: 0;
                float: right;
            }
        }
    }
    .goods{
        display: flex;
        align-items:stretch;
        
        >div{
            padding: 20px;
            text-align: center;
         &.goodsdesc{
      
            li{
                display: flex;
               padding: 10px;
           a{
              display: block;
              width:70px;
              height: 70px;
                  
           }
                
               .desc{
                    padding: 0 10px;
                    text-align: left;
                    width:220px;
                   .name{
                        height: 38px
                    }
                    .sku{
                        font-size: 12px;
                        color: #999;
                    }
                }
                .price{
                    width: 100px;
                  
                }
                .count{
                   
                   width:80px;
                }
            }
        } 
        
        &.state{
            flex-shrink: 0;
            width:120px;
            color: $xtxColor;
            text-align: center;
        }
        &.total{
            flex-shrink: 0;
            width:200px;
            >p{
                padding: 10px 0;
          &.cost{
                color: $priceColor;
            }  }
        
            
        }
        &.action{
            flex-shrink: 0;
            width:140px;

           
        }
    }
       
       
    }
       
}

</style>
