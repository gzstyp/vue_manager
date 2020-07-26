<template>
    <el-form :inline="inline" :model="modelObj" ref="formObj" label-width="100px">
        <el-form-item v-for="(item,index) in formData" :key="item.model">
            <el-input v-model="modelObj[item.model]" :placeholder="'请输入'+item.model" v-if="!item.type"></el-input>
            <el-select v-model="modelObj[item.model]" clearable :placeholder="'请选择'+item.model" v-if="item.type === 'select'">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-switch v-model="modelObj[item.model]" v-if="item.type === 'switch'"></el-switch>
        </el-form-item>
        <!--插槽-->
        <el-form-item><slot></slot></el-form-item>
    </el-form>
</template>
<script>
    export default {
        props : {
            inline : Boolean,/*是否是水平布局,默认是false,所以在传值时仅需传 inline 即可,因为当且仅当为true时可以简写*/
            modelObj : Object,/*表单对象数据*/
            formData : Array/*构建表单基础数据*/
        }
    }
</script>
<style scoped>
</style>
