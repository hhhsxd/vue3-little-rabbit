 import { getCateAPI } from "@/apis/layout";
 import { ref } from "vue";
import { defineStore } from "pinia";

export const useCategoryStore=defineStore('category',()=>{
  //state数据
const categoryList=ref([])
//action方法
const getcateList=async()=>{
  const res=await getCateAPI()
  categoryList.value=res.result
}
return {
  categoryList,
  getcateList
}
})

