import httpInstance from "@/utils/http";

//生成订单页
export const getCheckoutAPI=()=>{
    return httpInstance({
        url:'/member/order/pre'
        
    })
}
//提交订单信息
export const getOrderAPI=(data)=>{
    return httpInstance({
        url:'/member/order',
        method:'POST',
        data
    })
}

