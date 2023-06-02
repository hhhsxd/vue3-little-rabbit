import httpInstance from '@/utils/http'

//请求一级面包屑
export function getCategoryAPI(id){
   return httpInstance({
    url:'/category',
    params:{
        id
    }
   }) 
}

//二级面包屑
export function getSubCategoryAPI(id){
    return httpInstance({
        url:'/category/sub/filter',
        params:{
            id
        }
    })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
   export const getSubCateGoodAPI = (data) => {
    return httpInstance({
      url:'/category/goods/temporary',
      method:'POST',
      data
    })
  }