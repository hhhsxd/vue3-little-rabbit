<script setup>
import GoodsItem  from '@/views/home/components/GoodsItem.vue'
import {useSubGoods} from './composables/useSubGoods'
import {useSubCate} from './composables/useSubCate'
const {goodList,getGoodList,reqData,load,disabled}=useSubGoods()
const {filterList}=useSubCate()

//判断tab-pane切换
const tabChange=()=>{
    // console.log('tab变啦'+reqData.value.sortField)
    console.log(reqData.value.sortField);
    getGoodList(reqData.value)
}
</script>
<template>
    <div class="container">
        <!-- 二级面包屑导航 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:`/category/${filterList.parentId}`}">{{filterList.parentName}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{ filterList.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 标签栏 -->
        <div class="sub-container">
            <el-tabs @tab-change="tabChange" v-model="reqData.sortField">
                <!-- 该ii组件v-model默认绑定切换的Pane的name -->
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
                <!-- 商品列表 -->
                <GoodsItem v-for="i in goodList" :key="i.id" :goods="i" />
            </div>

        </div>          
          <!-- <div v-if="disabled" class="end">没有啦</div> -->
    </div>
</template>

<style lang='scss' scoped>
.bread-container{
    padding: 25px 0;
    color: #666;
}
.sub-container{
    padding: 20px 10px;
    background-color: #fff;
    .body{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 10px;
    }

}
// .end{
//     font-size: 30px;
//     width:100%;
//     height: 50px;
//     line-height: 50px;
//     text-align: center;
//     background-color: #fff;
//     color: $xtxColor;
//     margin-top: 20px;
// }

</style>
