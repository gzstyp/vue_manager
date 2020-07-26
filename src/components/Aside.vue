<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item :index="''+item.url" v-for="(item,index) in noChildren" :key="item.url" @click="clickMenu(item)">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
        </el-menu-item>
        <el-submenu :index="''+item.url" v-for="(item,index) in hasChildren" :key="index">
            <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item :index="''+subItem.url" v-for="(subItem,subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">
                    <i :class="subItem.icon"></i>
                    <span slot="title">{{subItem.name}}</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>
<script>
    export default {
        name: "Aside",
        /*计算属性*/
        computed : {
            noChildren(){
                return this.asideMenu.filter(item => !item.children);//无子页面
            },
            hasChildren(){
                return this.asideMenu.filter(item => item.children);//有子页面
            }
        },
        data(){
            return {
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
            /*点击导航菜单时跳转页面*/
            clickMenu(item){
                this.$router.push({name:item.url});//点击左边的导航菜单进行页面跳转,采用的是函数式编程,当有r时是路由,没有r的是参考路由信息
                this.$store.commit('selectMenu', item);
            }
        }
    }
</script>
<style scoped>
    .el-menu{
        height:100vh;
        border-right: none;
    }
</style>
