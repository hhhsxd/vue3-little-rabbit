import httpInstance from '@/utils/http.js'
//获取实时购物车列表
export function getCartListAPI(){
    return httpInstance({
        url:'/member/cart'
        //因为已经在http.js里面配置了登录后携带token 所以不用传递authorization
    })
}

//向购物车添加商品
export function addCartAPI({skuId,count}){
    return httpInstance({
        url:'/member/cart',
        method:"POST",
        data:{
            skuId,
            count
        }
    })
}

export function delCartAPI(ids){
   return httpInstance({
    url:'/member/cart',
    method:'DELETE',
    data:{
        ids
    }
   })
}

export function mergeCartAPI(data){
    return httpInstance({
        url:'/member/cart/merge',
        method:'POST',
        data
    })
}

