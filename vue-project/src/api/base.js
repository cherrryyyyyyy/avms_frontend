//接口地址


const base ={
    elementList:"/api/elements/elementsList",
    search:"/api/elements/search",
    deleteElements:"/api/elements/deleteElements",
    targetList:"/api/target/targetList",
    GetTarget:"/api/get_targets",
    GetPorts:"/api/get_port_lists",
    GetAliveMethods:"/api/get_alive_scan_methods",
    CreateTarget:"/api/create_target",
    DeleteTarget:"/api/delete_target",
    UpdateTarget:"/api/update_target",
    GetResult:"/api/get_result",
    GetTask:"/api/get_tasks",
    GetCves:"/api/get_cves",
    GetActiveMethods:"/api/get_alive_scan_methods",
    CreatePortList:"/api/create_port_list",
    DeletePortList:"/api/delete_port_list",
    UpdatePortList:"/api/update_port_list",
    CreateTask:"/api/create_task",
    StartTask:"/api/start_task",
    DeleteTask:"/api/delete_task",
    UpdataTask:"/api/update_task",
    QueryTask:"/api/query_task",
    GetFPS:"/api/get_fps_file",
    GetFPSFile:"/api/get_fps_by_id",
    GetPOC:"/api/get_pocs",
    GetStatistics:"/api/get_statistics"
}

export default base