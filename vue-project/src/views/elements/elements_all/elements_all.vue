<template>
    <div>
        <!-- 组件搜索-->
        <div class="header">
            <div class="form">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="组件名称">
                        <el-input v-model="formInline.name" placeholder="组件名称"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="group">
                <el-button size="small" type="warning" icon="el-icon-plus">添加组件</el-button>
                <el-button size="small" type="danger" icon="el-icon-delete">批量删除</el-button>
            </div>
        </div>

            <!--:data="tableData  注入data对象数组"
                el-table 表格组件
                el-table-column 表格列 prop=date prop属性来对应对象中的键名即可填入数据
                label="日期"  label属性定义表格列名
                width定义列宽
            -->
        <div class="content">
            <el-table :data="tableData" style="width: 100% " stripe border header-row-class-name="active-header" >
                <el-table-column type="selection" width="40"></el-table-column>
                <el-table-column prop="id" label="组件编号" width="180" align="center">
                </el-table-column>
                <el-table-column prop="element_class" label="组件类型" width="180" align="center">
                </el-table-column>
                <el-table-column prop="element_name" label="组件名称" align="center" show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="操作" align="center"> 
                    <!--使用template拿取整行的数据 -->
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" icon="el-icon-delete"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <Pagination></Pagination>
        </div>
    </div>
</template>

<script>
import Pagination from '@/components/pagination/page-tabs.vue'
export default {
    components:{
        Pagination
    },
    data() {
        return {
            formInline: {
                name: ''
            },
            tableData: []
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!', this.formInline);
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        async elementList(){
            let res = await this.$api.elementList()
            console.log('输出',res)
            this.tableData = res.data
        }
    },
    created(){
        this.elementList();
    }
}
</script>

<style lang="less" scoped>
.header {
    background: #fff;
    margin-bottom: 20px;
    padding: 10px;

    .el-from-item {
        margin-bottom: 16px;
    }

    .group {
        border: 1px solid #eee;
        padding: 8px;

    }
}

.content {
    background: #fff;

    /deep/ .active-header{
        color: #333;
    }
}
</style>