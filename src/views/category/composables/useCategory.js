//封装category，组件要以use开头，使用时视为函数调用
import { getCategoryAPI } from "@/apis/category"
export function useCategory(){
    const categoryList=ref({})
const  getcate=async (id)=>{
 const res=await getCategoryAPI(id)
 categoryList.value=res.result
}
const route=useRoute()
onMounted(()=>getcate(route.params.id))
//这里解决路由缓存问题
//用下面这个钩子函数在router更新前执行
onBeforeRouteUpdate((to)=>{
    console.log(to);
    getcate(to.params.id)
})
//以对象方式导出，可以导出数据以及方法
return {categoryList}
}
