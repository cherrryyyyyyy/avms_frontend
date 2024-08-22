<template>
    <div>
        <div class="header">
            <h3>
                目标（{{ total }}个）
            </h3>
        </div>

        <div class="wrapper">
            <el-container>
                <el-main>
                    <template>
                        <el-table stripe=true :data="Data" height=590 border style="width: 100%">
                            <el-table-column prop="name" label="端口名称" width="350" align="center"
                                show-overflow-tooltip="true">
                            </el-table-column>
                            <el-table-column prop="description" label="端口描述" width="600" align="center"
                                show-overflow-tooltip="true">
                            </el-table-column>
                            <el-table-column prop="impactScore" label="端口合计" width="100" align="center"
                                show-overflow-tooltip="true">
                                <template slot-scope="scope">
                                    {{ scope.row.tcp_ports_cnt + scope.row.udp_ports_cnt }}
                                </template>
                            </el-table-column>
                            <el-table-column prop="tcp_ports_cnt" label="TCP数量" width="100" align="center"
                                show-overflow-tooltip="true">
                            </el-table-column>
                            <el-table-column prop="udp_ports_cnt" label="UDP数量" width="100" align="center">
                            </el-table-column>
                            <el-table-column label="操作" align="center">
                                <!--使用template拿取整行的数据 scope.$index 当前行索引号， scope.row 当前行内容-->
                                <template slot-scope="scope">
                                    <!--编辑功能待实现-->
                                    <el-button type="primary" size="mini" icon="el-icon-edit"
                                        @click="StrategyDetail(scope.$index, scope.row)">详情</el-button>
                                    <el-button type="primary" size="mini" icon="el-icon-edit"
                                        @click="StrategyEdit(scope.$index, scope.row)">编辑</el-button>
                                    <el-button type="danger" size="mini" icon="el-icon-delete"
                                        @click="StrategyDelete(scope.$index, scope.row)">删除
                                    </el-button>

                                </template>
                            </el-table-column>
                        </el-table>
                    </template>

                </el-main>
            </el-container>
            <div class="pagination">
                <Pagination :total="total" @CurrentChange="CurrentChange"></Pagination>
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from '@/component/pagination/page-tabs.vue'
export default {
    components: {
        Pagination
    },
    data() {
        return {
            total: 0,
            Data: [],
            page: 1,
        }
    },
    methods: {
        CurrentChange(val) {
            console.log('頁嗎', val);
            this.strategyList(val);
            this.page = val;
        },
        async strategyList(page) {
            //let column = 1;
            let res = await this.$api.GetPorts();
            this.Data = res.data.data.slice((page - 1) * 10, page * 10);            
            console.log('侧石', this.Data, page, res);
            this.total = res.data.data.length;
        },
        StrategyDetail(index, row) {
            console.log(index, row);
            //index += (this.page - 1) * 10;
            console.log(row)
            this.showdetail(row)
        },
        showdetail(val) {
            this.$router.push(
                {
                    path: '/strategy/strategydetail',
                    query: { index: val }
                })
        },
        StrategyEdit(index, row){
            console.log(index, row);
        },
        StrategyDelete(index, row){
            console.log(index, row);
        }

    },
    created() {
        this.strategyList(1);
        console.log('what???');
    }
}
</script>


<style lang="less" scoped>
.header {
    height: 55px;
    background: #fff;
    border-bottom: 2px solid black;


}

.wrapper {
    padding: 10px;
}
</style>