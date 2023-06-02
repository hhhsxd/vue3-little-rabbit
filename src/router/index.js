import { createRouter, createWebHistory } from 'vue-router'

import Layout from "@/views/layout/index.vue"
import Login from "@/views/login/index.vue"
import Home from "@/views/home/index.vue"
import Category from "@/views/category/index.vue"
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/detail/index.vue'
import CartList from '@/views/cartlist/index.vue'
import Checkout from '@/views/checkout/index.vue'
import Pay from "@/views/pay/index.vue"
import PayCallback from '@/views/pay/paycallback.vue'
import Member from '@/views/member/index.vue'
import MemberOrder from '@/views/member/components/MemberOrder.vue'
import MemberUser from '@/views/member/components/MemberUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    name:'layout',
    component:Layout,
    children:[
      {
      path:'',
      name:'home',
      component:Home
    },
    {
      path:'category/:id',
      name:"category",
      component:Category
    },
    {
      path:'category/sub/:id',
      name:'subCategory',
      component:SubCategory
    },
    {
      path:'detail/:id',
      name:'detail',
      component:Detail
    },
    {
      path:'cartlist',
      name:'cartlist',
      component:CartList
    },
    {
      path:'checkout',
      name:'checkout',
      component:Checkout

    },
    {
      path:'pay',
      component:Pay,
      name:'pay'
    },
    {
      path:'paycallback',
      component:PayCallback
    },
    {
      path:'member',
      component:Member,
      name:Member,
      children:[
           {
         path:'',
         component:MemberUser
        },
        {
         path:'order',
         component:MemberOrder
        }
      ]
 
    }
  ]
   },
   { 
    path:'/login',
    name:'login',
    component:Login
   }
  ],
//配置路由滚动行为
scrollBehavior (){
  return {
    top:0
  }
}
})

export default router
