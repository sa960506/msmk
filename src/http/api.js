//先引入axios
import service from "./service";
import request_ur from "./request_ur";

//封装请求方法   arg 表示参数
//获取验证码
export function smsCode(arg){
    return service({
        url:request_ur.smsCode,
        data:arg, //参数
        method:"post"
    })
}

//登录
export function login(arg){
    return service({
        url:request_ur.login,
        data:arg, //参数
        method:"post"
    })
}

//tabbar
export function tabbar(arg){
    return service({
        url:request_ur.tabbar,
        data:arg, //参数
        method:"get"
    })
}

//轮播图
export function banner(arg){
    return service({
        url:request_ur.banner,
        data:arg, //参数
        method:"get"
    })
}

//九宫格
export function nav(arg){
    return service({
        url:request_ur.nav,
        data:arg, //参数
        method:"get"
    })
}

//首页详情
export function appIndex(arg){
    return service({
        url:request_ur.appIndex,
        data:arg, //参数
        method:"get"
    })
}

//news咨询全部内容的接口
export function infor(arg){
    return service({
        url:request_ur.infor,
        data:arg, //参数
        method:"post"
    })
}

//news咨询 tab
export function infoClassfiy(arg){
    return service({
        url:request_ur.infoClassfiy,
        data:arg, //参数
        method:"get"
    })
}

//修改头像
export function img(arg){
    return service({
        url:request_ur.img,
        data:arg, //参数
        method:"post"
    })
}
//课程列表
export function config(arg){
    return service({
        url:request_ur.config,
        data:arg, //参数
        method:"get"
    })
}

//课程详情
export function teacher(arg){
    return service({
        url:request_ur.teacher+arg,
        data:arg, //参数
        method:"get"
    })
}

//签到请求
export function isSign(arg){
    return service({
        url:request_ur.isSign,
        data:arg, //参数
        method:"get"
    })
}

//课程详情 主讲课程列表
export function mainCourse(arg){
    return service({
        url:request_ur.mainCourse,
        data:arg, //参数
        method:"post"
    })
}

//课时详情 老师教学详情
export function courseInfo(arg){
    return service({
        url:request_ur.courseInfo+arg,
        data:arg, //参数
        method:"get"
    })
}
//咨询详情
export function detail(arg){
    return service({
        url:request_ur.detail,
        data:arg, //参数
        method:"post"
    })
}
 //图书列表头部
export function classify(arg){
    return service({
        url:request_ur.classify,
        data:arg, //参数
        method:"get"
    })
}