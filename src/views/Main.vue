<template>
    <el-container>
        <el-aside width="200px"><Aside/></el-aside>
        <el-container>
            <el-header><Header/></el-header>
            <Tab/>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    import Header from "../components/Header";
    import Aside from "../components/Aside";
    import Tab from "../components/Tab";
    export default {
        name: "Main",
        components : {
            Header,Aside,Tab
        }
    }
</script>
<style scoped>
    .el-header{
        background-color:#eee;
    }
</style>
