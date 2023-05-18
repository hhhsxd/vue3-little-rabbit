<script setup>
 
</script>

<template>
 <!-- 这里设置了两种nav，根据是否登录即带有token判断渲染 -->
 <nav class="app-topnav">
    <div class="container">
        <ul>
            <template v-if="true">
              <li><a href="javascript:;"><i class="iconfont icon-user"></i>德华</a></li>
              <li>
                <el-popconfirm @confirm="confirm" title="确认退出登录吗" confirm-button-text="确认" concel-button-text="取消">
                    <template #reference>
                        <a href="javascript:;">退出登录</a>
                    </template>
                </el-popconfirm>
              </li>
              <li><a href="javascript:;">我的订单</a></li>
              <li><a href="javascript:;">会员中心</a></li>
            </template>
            <template v-else>
              <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
              <li><a href="javascript:;">帮助中心</a></li>
              <li><a href="javascript:;">关于我们</a></li>
            </template>
         </ul>          
    </div>
 </nav>

  
</template>

<style scoped lang="scss">
    .app-topnav {
        background:#333;
     ul{
      display: flex;
      height: 53px;
      justify-content: flex-end;
      align-items: center;
      li{
       a{
        display: inline-block;
        color: #cdcdcd;
        padding: 0 15px;
        line-height: 1;
        border-left: 2px solid #666;
        
       }
       i{
        font-size: 14px;
        margin-right: 2px;
       }
       &:hover{
        color: $xtxColor;
       }
      }
      
    }


    }
    
    
</style>