import { getSubCategoryAPI } from '@/apis/category';

export function useSubCate(){
    const route=useRoute()
const filterList=ref({})
const getSubCate=async(id)=>{
    const res=await getSubCategoryAPI(id)
    filterList.value=res.result
    // console.log(res);
}
onMounted(()=>{
    getSubCate(route.params.id)
    
})
return {filterList}
}
