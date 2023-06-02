import {defineStore} from 'pinia'
import { getCartListAPI,addCartAPI,delCartAPI} from '@/apis/cartlist'
import { useUserStore } from './userinfo'

export const useCartStore=defineStore('cart',()=>{
    //这个使用要写在defineStore里面
    const userStore=useUserStore()
    //本地购物车
    const cartlist=ref([])
    //添加到购物车
    const addCart=async(goods)=>{
        const {skuId,count}=goods
        if(userStore.userInfo.token){
            //如果是登录了的
            //调用addapi添加Item
        await addCartAPI({skuId,count })
        //在这里更新cartlist,因为cartlist是本地的
        getCartList()
        }else{
            //没登录的
            const item=cartlist.value.find((item)=>goods.skuId===item.skuId)
            if(item){
                item.count++
            }else{
                cartlist.value.push(goods)
            }
        }
        
    }
    //获取最新购物车
    const getCartList=async()=>{
        const res=await getCartListAPI()
        cartlist.value=res.result
    }
   //删除cart项目
   const delCart=async(ids)=>{
    //判断是用本地删除还是登录后的删除
    if(userStore.userInfo.token){
    await delCartAPI([ids])
    getCartList()
    }else{
        //本地删除
        const index=cartlist.value.findIndex((item)=>item.skuId===ids)
        cartlist.value.splice(index,1)
    }
   }
  
   //单选框调用
   const singleCheck=(skuId,selected)=>{
        const item= cartlist.value.find((item)=>item.skuId===skuId)
        item.selected=selected
   }
   //判断是否全选
   const isAll=computed(()=>cartlist.value.every((item=>item.selected)))
   //全选调用
   //这里全选框是什么状态其他每一项就是什么状态
   const allselected=(selected)=>{
    cartlist.value.forEach((item)=>item.selected=selected)
   }
   //计算总数
   const allCount=computed(()=>cartlist.value.reduce((a,b)=>a+b.count,0))
   //计算总价
   const allCost=computed(()=>cartlist.value.reduce((a,b)=>a+b.count*b.price,0))
   //计算选择了的数量
   const selectCount=computed(()=>cartlist.value.filter(i=>i.selected).reduce((a,b)=>a+b.count,0))
   //计算选择了的总价
   const selectCost=computed(()=>cartlist.value.filter((i)=>i.selected).reduce((a,b)=>a+b.count*b.price,0))
return {
    addCart,
    getCartList,
    delCart,
    singleCheck,
    allselected,
    cartlist,
    allCount,
    allCost,
    isAll,
    selectCount,
    selectCost
}
},{
    persist:true
    })
