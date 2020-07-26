<template>
    <div class="login_container" v-cloak>
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/images/logo.jpg" alt="logo"/>
            </div>
            <el-form :model="loginForm" label-width="80px" class="login_form">
                <el-form-item label="登录账号">
                    <el-input v-model="loginForm.userName" placeholder="输入登录账号|用户名"/>
                </el-form-item>
                <el-form-item label="登录密码">
                    <el-input type="password" v-model="loginForm.password" placeholder="输入登录密码" />
                </el-form-item>
            </el-form>
            <el-row type="flex" justify="center" class="btns">
                <el-button type="primary" @click="login()">登录认证</el-button>
                <el-button type="info" plain>重置数据</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                loginForm :{
                    userName : 'admin',
                    password : '1'
                },
                asideMenu : [
                    {
                        url : '/home',
                        name : '首页',
                        icon : 'el-icon-s-home'
                    },
                    {
                        url : '/video',
                        name : '视频管理',
                        icon : 'el-icon-video-camera'
                    },
                    {
                        url : '/user',
                        name : '用户管理',
                        icon : 'el-icon-user'
                    },
                    {
                        name : '其他页面',
                        icon : 'el-icon-monitor',
                        children : [
                            {
                                url : '/page1',
                                name : '页面1',
                                icon : 'el-icon-present'
                            },
                            {
                                url : '/page2',
                                name : '页面2',
                                icon : 'el-icon-set-up'
                            },
                            {
                                url : '/setting',
                                name : '设置',
                                icon : 'el-icon-setting'
                            }
                        ]
                    }
                ]
            }
        },
        methods : {
            login : function (){
                this.$message.success('登录成功');
                this.$store.commit('clearMenu');//防止二次登录
                this.$store.commit('setMenu',this.asideMenu);
                this.$store.commit('addMenu',this.$router);
                setTimeout(() =>{
                    this.$router.push('/home');/*采用的是编程式导航,进行页面跳转*/
                },2000);
            }
        },
        created(){
            sessionStorage.removeItem('activeUrl');
            sessionStorage.setItem("activeTitle",'欢迎你');
        }
    }
</script>

<style scoped>
    [v-cloak]{
        display:none;
    }
    .login_container{
        height: 100%;
        width: 100%;
        background: #eeeeee;
    }
    .login_box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 8px;
        position:absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .login_box .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 8px;
        box-shadow: 0 0 10px #ddd;/* 添加阴影,向外扩展10px */
        position:absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
    }
    .login_box .avatar_box img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
    .btns{
        margin-top:20px;
        margin-left:120px;
        position:absolute;
        bottom: 24px;
    }
    .login_form_bak{
        position:absolute;
        width: 97%;
        top: 100px;
    }
    .login_form{
        position:absolute;
        width: 100%;
        top: 100px;
        box-sizing: border-box;
        padding-right: 15px;
    }
</style>
