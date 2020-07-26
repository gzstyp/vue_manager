<template>
    <div class="manager">
        <div class="manager-header">
            <!--当且仅当为true时可以简写,如下的 inline -->
            <Form inline :formData="formData" :modelObj="formSearch"></Form>
            <el-button-group>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                <el-button type="primary" icon="el-icon-plus">添加</el-button>
                <el-button type="primary" icon="el-icon-delete">删除</el-button>
            </el-button-group>
        </div>
        <div class="manager-content">
            <ListTable :tablesData="tablesData" :tablesLabel="tablesLabel" :config="tablesConfig"></ListTable>
        </div>
    </div>
</template>
<script>
    import Form from "../../components/Form";
    import ListTable from "../../components/ListTable";
    export default {
        name: "User",
        components : {Form,ListTable},
        data(){
            return {
                formSearch : {
                    keyword : ''
                },
                formData : [
                    {
                        model : 'keyword',
                        label : '',
                        options : []
                    }
                ],
                tablesData : [
                    {
                        name : '田应平',
                        age : 35,
                        sex : 1,
                        addrs : '贵阳市小河区'
                    },
                    {
                        name : '田卓智',
                        age : 4,
                        sex : 1,
                        addrs : '小河区万科大都会'
                    },
                    {
                        name : '杨紫',
                        age : 26,
                        sex : 2,
                        addrs : '云岩区未来方舟'
                    },
                    {
                        name : '田应平',
                        age : 34,
                        sex : 1,
                        addrs : '贵阳市小河区'
                    },
                    {
                        name : '田卓智',
                        age : 5,
                        sex : 1,
                        addrs : '小河区万科大都会'
                    },
                    {
                        name : '杨紫',
                        age : 18,
                        sex : 2,
                        addrs : '云岩区未来方舟'
                    },
                ],
                tablesLabel : [
                    {
                        prop : 'name',
                        label : '姓名'
                    },
                    {
                        prop : 'age',
                        label : '年龄'
                    },
                    {
                        prop : 'sex',
                        label : '性别sex'
                    },
                    {
                        prop : 'sexLabel',
                        label : '性别sexLabel'
                    },
                    {
                        prop : 'addrs',
                        label : '住址'
                    }
                ],
                tablesConfig : {
                    page : 1,
                    total : 6,
                    loading : false
                }
            }
        },
        methods : {
            getList(){
                this.tablesConfig.loading = true;
                console.info(this.tablesData);
                setTimeout(() =>{
                    this.tablesConfig.loading = false;
                    this.tablesData = this.tablesData.map(item => {
                        item.sexLabel = item.sex === 1 ? '男' : '女';
                        return item;
                    });
                    console.info(this.tablesData);
                    this.tablesConfig.total = 20;
                },5000);
            }
        },
        created(){
            this.getList();
        }
    }
</script>
<style scoped>
    .manager{
        height:90%;
        padding-bottom:8px;
        overflow:hidden;
    }
    .manager-header{
        display:flex;
        justify-content:start;
    }
    .el-button-group{
        margin-left:-18px;
    }
</style>
