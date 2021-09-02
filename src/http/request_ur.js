//封账所有路径  便于后面的维护
module.exports={
    smsCode:"/smsCode", //短信验证
    login:"/login",  //登录
    banner:"/banner",//首页轮播图
    appIndex:"/recommend/appIndex",//首页数据
    tabbar:"/nav/bottom",  //tabbar
    nav:"/nav", //九宫格,
    infor:"/information/index",//咨询全部内容的接口
    infoClassfiy:"/information/classify?",//咨询里面的tab字段
    img:"/img",//咨询修改头像的接口
    config:'/teacher/search/attrs',//课程列表数据
    teacher:'/teacher/' ,//课程详情
    isSign:'/user/integral/signRecord',//签到请求
    mainCourse:'/teacher/mainCourse/',//课程详情 主讲课程列表
    courseInfo:'/courseInfo/basis_id=',//课时详情 老师教学详情
    detail:'/information/detail/', //咨询详情
    classify:"'/book/classify?", //图书列表头部
    tu:'/book/list/',//图书列表的 时间 全部数据
    
}