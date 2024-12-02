<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="text" @click="Goback" class="detailed">
                    <h3>
                        ← 返回
                    </h3>
                </el-button>
                任务结果
            </h3>
        </div>
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router background-color="#409eff"
            text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/result/resultdetail/taskoverview">任务概况</el-menu-item>
            <el-menu-item index="/result/resultdetail/assetstatistics">目标信息</el-menu-item>
            <el-menu-item index="/result/resultdetail/hostvulnerability" :disabled="this.vulbool">主机漏洞</el-menu-item>
            <el-menu-item index="/result/resultdetail/pocvulnerability" :disabled="this.pocbool">已验证漏洞</el-menu-item>
        </el-menu>
        <div class="wrapper">
            <el-row>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <template>
                            <el-table :data="hostData" height=100% border highlight-current-row
                                @current-change="handleCurrentChange" style="width: 100%">
                                <el-table-column prop="ip" label="主机" width="210">
                                </el-table-column>
                                <el-table-column prop="vmatch_vuls.length" label="漏洞数量" width="205">
                                </el-table-column>
                            </el-table>
                        </template>
                    </div>
                </el-col>
                <el-col :span="18">
                    <div class="grid-content bg-purple-light">
                        <h2>
                            {{ this.hostSelectData.ip }}
                        </h2>


                        <el-descriptions column=1 border labelStyle="width: 156px">

                            <el-descriptions-item labelStyle="width: 156px">
                                <span slot="label" class="fontClass">主机名</span>
                                <div class="fontClass">
                                    <el-card class="box-card">
                                        <div v-for="host in this.hostSelectData.hostnames" :key="host"
                                            class="text item">
                                            {{ host.name }}
                                        </div>
                                    </el-card>
                                </div>
                            </el-descriptions-item>

                            <el-descriptions-item>
                                <span slot="label" class="fontClass">mac</span>
                                <div class="fontClass">
                                    {{ this.hostSelectData.mac }}
                                </div>
                            </el-descriptions-item>

                            <el-descriptions-item labelStyle="min-width:156px">
                                <span slot="label" class="fontClass">操作系统</span>
                                <div class="fontClass">
                                    {{ this.hostSelectData.os.name }}
                                </div>
                            </el-descriptions-item>

                            <el-descriptions-item labelStyle="width: 156px">
                                <span slot="label" class="fontClass">端口</span>
                                <div class="fontClass">
                                    <el-card class="box-card">
                                        <div v-for="port in this.hostSelectData.ports_detail" :key="port"
                                            class="text item">
                                            {{ port.port_id }}
                                        </div>
                                    </el-card>
                                </div>
                            </el-descriptions-item>


                            <el-descriptions-item labelStyle="width: 156px;height: 500px">
                                <span slot="label" class="fontClass">服务详细信息</span>
                                <div class="fontClass">
                                    <el-table :data="this.SelectServiceData" height=500px border
                                        highlight-current-row style="width: 100%">
                                        <el-table-column type="expand">
                                            <template slot-scope="props">
                                                <div>
                                                    <json-viewer :value="props.row.assets" :expand-depth="5" copyable boxed sort class="w-100%"></json-viewer>
                                                </div>
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="id" label="端口号" show-overflow-tooltip="true">
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-descriptions-item>

                            <el-descriptions-item labelStyle="width: 156px;height: 500px">
                                <span slot="label" class="fontClass">旗标详细信息</span>
                                <div class="fontClass">
                                    <el-table :data="this.SelectServiceData" height=500px border
                                        highlight-current-row style="width: 100%">
                                        <el-table-column type="expand">
                                            <template slot-scope="props">
                                                <div>
                                                    <json-viewer :value="props.row.banners" :expand-depth="5" copyable boxed sort class="w-100%"></json-viewer>
                                                </div>
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="id" label="端口号" show-overflow-tooltip="true">
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-descriptions-item>

                        </el-descriptions>

                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
//import Pagination from '@/component/pagination/page-tabs.vue'
import JsonViewer from 'vue-json-viewer'
export default {
    components: {
        JsonViewer
    },
    data() {
        return {
            hostData: this.hostD,
            hostSelectData: [],
            vulbool: false,
            pocbool: false,
            SelectServiceData: [],

        }
    },
    props: {
        hostD: {
            type: Array,
            default: () => [],
        }
    },
    methods: {
        Goback() {
            this.$router.push('/result/index')
        },
        handleCurrentChange(val) {
            this.hostSelectData = val;
            this.SelectServiceData = [];
            console.log(this.hostSelectData);
            for(let data of this.hostSelectData.ports_detail){
            let text = {
                id : data.port_id
            }
            text['assets'] = [];
            text['banners'] =[];
            //console.log(data);
            for(let key in data.assets){
                //console.log(data.assets[key]['service.product'])
                if(data.assets[key]['service.product'] == ''){
                    continue;
                }
                let text1 = {
                    name: key
                }
                for(let key1 in data.assets[key])
                {
                    text1[key1] = data.assets[key][key1];
                }
                //console.log(text1);
                text['assets'].push(text1);
            }
            for(let key2 in data.banners){
                let text2 ={
                    name: key2
                }
                for(let bannerkey in data.banners[key2]){
                    text2[bannerkey] = data.banners[key2][bannerkey];
                }
                text['banners'].push(text2);
            }
            
            this.SelectServiceData.push(text);
            
        }
        console.log('service_data',this.SelectServiceData);
        }
    },
    created() {
        console.log('chuang!!', this.hostData);
        let vuls = 0;
        let pocs = 0;
        for (let data of this.hostData) {
            if('vmatch_vuls' in data){
                vuls += data.vmatch_vuls.length;
            }
        }
        if (vuls == 0) {
            this.vulbool = true;
        }
        for(let data of this.hostData){
            if('poc_vuls' in data){
                pocs+=data.poc_vuls.length;
            }
        }
        if(pocs == 0){
            this.pocbool = true;
        }
        this.SelectServiceData = [];
        this.hostSelectData = this.hostData[0];
        for(let data of this.hostSelectData.ports_detail){
            let text = {
                id : data.port_id
            }
            text['assets'] = [];
            text['banners'] =[];
            //console.log(data);
            for(let key in data.assets){
                //console.log(data.assets[key]['service.product'])
                if(data.assets[key]['service.product'] == ''){
                    continue;
                }
                let text1 = {
                    name: key
                }
                for(let key1 in data.assets[key])
                {
                    text1[key1] = data.assets[key][key1];
                }
                //console.log(text1);
                text['assets'].push(text1);
            }
            for(let key2 in data.banners){
                let text2 ={
                    name: key2
                }
                for(let bannerkey in data.banners[key2]){
                    text2[bannerkey] = data.banners[key2][bannerkey];
                }
                text['banners'].push(text2);
            }
            this.SelectServiceData.push(text);
            
        }
        console.log('service_data',this.SelectServiceData);
    }
}
</script>

<style lang="less" scoped>
.header {
    height: 55px;
    background: #fff;
    border-bottom: 2px solid black;
    display: flex;
    align-items: center;

}

.wrapper_left {
    padding: 10px;

    height: auto;
}

.wrapper {
    padding: 10px;
}

.wrapper_right {
    top: 0;
    padding-left: 400px;
}

.fontClass {
    font-size: 20px;
    font-family: Microsoft Yahei;
}
</style>