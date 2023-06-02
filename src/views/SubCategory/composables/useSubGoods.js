import { getSubCateGoodAPI } from '@/apis/category';


export function useSubGoods(){
    const route=useRoute()
   const goodList = ref([])
   const reqData = ref({
     categoryId: route.params.id,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime'
   })
     
   const getGoodList = async (data) => {
     const res = await getSubCateGoodAPI(data)
     console.log(res)
     goodList.value = res.result.items
   }
   //下拉加载,并检查全部加载完
   const disabled= ref(false)
   const load=async ()=>{
       console.log('下拉加载啦');
       reqData.value.page++
      const res=await getSubCateGoodAPI(reqData.value)
       goodList.value=[...goodList.value,...res.result.items] 
       if(res.result.items.length===0)  disabled.value=true
   }
    onMounted(()=>{
    getGoodList (reqData.value)
   })
   return {goodList,load,getGoodList,reqData,disabled}
}
   