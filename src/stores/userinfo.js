import {getUserAPI} from '@/apis/user'
import { defineStore } from 'pinia'
import { mergeCartAPI } from '@/apis/cartlist'
import { useCartStore } from './cartlist'

export const useUserStore=defineStore('user',()=>{
     const cartstore=useCartStore()
    const userInfo=ref({})
    //定义调用接口的方法
    const getUserInfo=async({account,password})=>{
        const res= await getUserAPI({
            account,password
        })
        userInfo.value=res.result
        //登录后合并购物车
         await mergeCartAPI(cartstore.cartlist.map(item=>{
             return {
                 skuId:item.skuId,
                 selected:item.selected,
                 count:item.count,
             }
         }))
         cartstore.getCartList()
     
    }
    const clearUserInfo=()=>{
        userInfo.value={}
       }
    return {getUserInfo,userInfo,clearUserInfo}
//配置持久化
},{persist:true})