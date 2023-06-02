//获得订单id的接口
import httpInstance from '@/utils/http'
export const getPayAPI=(id)=>{
    return httpInstance({
        url:`/member/order/${id}`
    })
}