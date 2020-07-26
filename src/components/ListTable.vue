<template>
    <div class="listTable">
        <el-table :data="tablesData" stripe height="300">
            <el-table-column label="序号" type="index" width="50"></el-table-column>
            <el-table-column type="selection" align="center" width="35"></el-table-column>
            <el-table-column show-overflow-tooltip  v-for="(item,index) in tablesLabel" :key="item.prop" :label="item.label">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row[item.prop]}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[2, 4, 10,20]"
            :page-size="2"
            layout="total, sizes, prev, pager, next, jumper"
            :total="6">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        name: "ListTable",
        props : {
            tablesData : Array,
            tablesLabel : Array,
            config : Object/*可选参数*/
        },
        methods : {
            handleEdit(index,row){
                console.info(index);
                console.info(row);
            },
            handleDelete(index,row){
                console.info(index);
                console.info(row);
            },
            handleSizeChange(){

            },
            handleCurrentChange(){

            }
        }
    }
</script>
<style scoped>
</style>
