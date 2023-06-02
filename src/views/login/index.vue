<script setup>
//表单数据对象
import { useUserStore } from '@/stores/userinfo';
import { useRouter } from 'vue-router';
const router=useRouter()
const userStore=useUserStore()
//这里双向绑定用户输入的账户密码，账号密码暂时配置
const form=ref({
    account:'12056258282',
    password: 'hm#qd@23!',
   agree:true
})
//规则对象
const rules={
    account:[
        {
            required:true,
            message:'用户名不能为空'
        }
    ],
    password:[
        {
            required:true,
            message:'密码不能为空'
        },
        {
            min:6,max:24,message:'密码长度要求6-24个字符'
        }
    ],
    agree:[
        {
            validator:(rule,val,callback)=>{
                return val?callback():new Error('请先同意协议')
            }
        }
    ]

}
//这里是统一验证的表单实例
const formRef=ref({})
console.log(formRef);
const loginIn=()=>{
       const {account,password}=form.value
    //调用form实列方法
    formRef.value.validate(async(valid)=>{
        //所有规则都校验通过valid才为true
        console.log(valid);
        if(valid){
           await userStore.getUserInfo({account,password})
           ElMessage({type:'success',message:'登录成功！'})
           router.replace({path:'/'})
        }else{
            alert('请填写完整')
            return false
        }
    })
}
</script>
<template>
    <header class="header-login">
        <div class="container">
            <h1 class="logo">
                <RouterLink to="/"></RouterLink>
            </h1>
            <RouterLink to="/" class="enter">
                进入网站首页
                <i class="iconfont icon-angle-right"></i>
                <i class="iconfont icon-angle-right"></i>
            </RouterLink>
        </div>
    </header>
    <section class="login-section">
        <div class="wraper">
            <nav>账户登录</nav>
            <div class="account-box">
                <div class="form">
                    <!-- form绑定表单对象和规则对象 -->
                    <el-form ref="formRef" :model="form" :rules="rules" label-position="right" label-width="60px" status-icon>
                        <!-- form-item绑定校验的规则字段 -->
                <el-form-item label="账户" prop="account">
                    <!-- input双向绑定表单数据 -->
                    <el-input v-model="form.account"/>
                </el-form-item>
                <el-form-item label="密码" prop="password" >
                    <el-input v-model="form.password"/>
                </el-form-item>
                <el-form-item label-width="22px" prop="agree">
                   <el-checkbox size="large" v-model="form.agree">
                    我已同意隐私条款和服务条款
                   </el-checkbox>
                </el-form-item>
                <el-button size="large" class="subBtn" @click="loginIn" >点击登录</el-button>
            </el-form>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div class="container copyright">
            <p>
                <a href="javascript:;">关于我们</a>
                <a href="javascript:;">帮助中心</a>
                <a href="javascript:;">售后服务</a>
                <a href="javascript:;">配送与验收</a>
                <a href="javascript:;">商务合作</a>
                <a href="javascript:;">搜索推荐</a>
                <a href="javascript:;">友情链接</a>
            </p>
            <p>CopyRight © 小兔鲜儿</p>
        </div>
    </footer>
</template>

<style lang='scss' scoped>
.header-login{
    background-color: #fff;
    height: 132px;
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo{
        a{
             display: inline-block;
             background: url('@/assets/images/logo.png') no-repeat center/contain;
             width: 200px;
             height: 132px;
        }
    }
    .enter {
        i{
            color: $xtxColor;
            font-size: 14px;
        }
    }
}
.login-section{
    background: url('@/assets/images/login-bg.png') no-repeat center/cover;
    height: 488px;
    position: relative;
    .wraper{
       width:380px ;
       position: absolute;
        left:50%;
        top:54px;
        transform: translateX(100px);
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0,0,0,.15);
        nav{
            font-size: 18px;
            text-align: center;
            line-height: 55px;
            height: 55px;
            margin-bottom: 10px;
            border-bottom: 1px solid #f5f5f5;
        }
        .account-box{
            .form{
                padding: 0 20px 20px 20px;
                .subBtn{
                    display: block;
                    width: 100%;
                    height: 40px;
                    
                    text-align: center;
                    background-color: $xtxColor;
                    color: #fff;
                    //element组件里面嵌套的span是放按钮文字的地方
                    span{
                        line-height: 40px;
                    }
                    
                }
            }
        }
    }
    
}
.copyright{
            height: 170px;
            margin-top: 40px;
            width: 100%;
            p{
                display: flex;
                justify-content: center;
                color: #999;
                margin-bottom: 20px;
                a{
                color: #999;
                display:inline-block;
                padding: 0 10px;
                font-size: 15px;
                border-right: 1px solid #999;
                &:last-child{
                    border: none;

                }
            }
            }
            
        }
</style>
