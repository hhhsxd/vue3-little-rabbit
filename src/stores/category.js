 import { getCateAPI } from "@/apis/layout";
 import { ref } from "vue";
import { defineStore } from "pinia";
//store都命名为use***Store
export const useCategoryStore=defineStore('category',()=>{
  //state数据
const categoryList=ref([])
//action方法
const getcateList=async()=>{
  const res=await getCateAPI()
  categoryList.value=res.result
}
//state和action暴露出去
return {
  categoryList,
  getcateList
}
})

