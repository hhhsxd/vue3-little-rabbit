<script setup>
    import LayoutNav from "./component/LayoutNav.vue"
    import LayoutHeader from "./component/LayoutHeader.vue"
    import LayoutFooter from "./component/LayoutFooter.vue"
    import LayoutFix from "./component/LayoutFix.vue"
    import { useCategoryStore } from "@/stores/category"
    import { onMounted } from "vue"
    const categorystore=useCategoryStore()
    onMounted(() => {
      categorystore.getcateList()
    })//在加载完页面后马上调用usegetcategoryAPI的action
</script>
<template>
    <LayoutFix/>
    <LayoutNav />
    <LayoutHeader/>
      <!-- 下面是二级路由出口 -->
      
    <!-- <RouterView :key="$route.fullPath" />//这里配置这样对于路由缓存出现的不刷新页面是可行的，但是太粗糙，banner的请求重复了
     -->
     <RouterView/>
    <LayoutFooter/>
</template>

<style scoped lang="scss">
</style>