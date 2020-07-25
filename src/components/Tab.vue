<template>
    <div>
        <!-- :closable="tag.url !== '/'" 表示不等于首页时才显示关闭按钮 -->
        <el-tag :key="tag.url" v-for="tag in tags" :closable="tag.url !== '/'" :disable-transitions="false" @close="handleClose(tag)" @click="changeMenu(tag)">
            {{tag.name}}
        </el-tag>
    </div>
</template>
<script>
    import {mapState,mapMutations} from 'vuex';
    export default {
        name: "Tab",
        computed : {
            //括号内的参数可以是数组或对象,此处是对象,前面的tags是属性名,好比在 data 定义一个属性名为 tags 一个道理，只是用了一个属性的辅助 mapState 替换了在 data 写的属性名而已
            ...mapState({
                tags: state => state.tab.tabsList,//tab是模块化的名称
            })//...表示让计算的属性合并
        },
        methods: {
            //括号内的参数可以是数组或对象,此处是对象,前面的 close 是方法名,好比在 methods 定义一个方法名为 close 一个道理，只是用了一个函数的辅助 mapMutations 替换了在 methods 写的方法名而已
            ...mapMutations({
                close : 'closeTab'//即相当于 this.$store.commit('closeTab',tag);其closeTab指定Vuex方法名及传参数!!!
            }),
            handleClose(tag){
                this.close(tag);//调用的是上面的 close : 'closeTab' 的属性，tag 是参数!!!
            },
            /*点击标签时跳转页面*/
            changeMenu(item){
                this.$router.push({name:item.url});//点击左边的导航菜单进行页面跳转,采用的是函数式编程,当有r时是路由,没有r的是参考路由信息
                this.$store.commit('selectMenu', item);
            }
        }
    }
</script>
<style scoped>
    .el-tag,.el-tag--light{
        margin-right:2px;
        cursor:pointer;
    }
</style>
