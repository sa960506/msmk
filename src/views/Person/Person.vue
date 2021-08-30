<template>
<div class="person">
    <div class="top" @click="deng">
       <div class="item" v-if="!$store.state.token">
           <p><img src="@/assets/3.png" alt="" class="p1"></p>
            <p class="p2"> 登录/注册</p>
       </div>
       <div class="item" v-else>
           <p><img src="@/assets/3.png" alt="" class="p1"></p>
            <p class="p2">{{$store.state.token.mobile}}</p>
       </div>
    </div>
    <div class="xue">
        <ul>
            <li>
                <p class="li1">0</p>
                <p>我的学习</p>
            </li>
             <li>
                <p class="li2">0</p>
                <p>本周课时</p>
            </li>
             <li>
                <p class="li3">0</p>
                <p>我的积分</p>
            </li>
        </ul>
    </div>
    <div class="con">
       <ul>
            <li><span>我的作业</span><p><van-icon name="arrow" /></p></li>
            <li class="li1"><span>我的社区</span><p><van-icon name="arrow" /></p></li>
        </ul>
        <ul>
            <li><span>课程订单</span><p><van-icon name="arrow" /></p></li>
            <li><span>图书订单</span><p><van-icon name="arrow" /></p></li>
        </ul>
           
        <ul>
            <li><span>优惠券</span><p><van-icon name="arrow" /></p></li>
            <li><span>学习卡</span><p><van-icon name="arrow" /></p></li>
            <li><span>分销中心</span><p><van-icon name="arrow" /></p></li>
        </ul>
           
        <ul>
             <li><span>消息中心</span><p><van-icon name="arrow" /></p></li>
            <li><span>地址管理</span><p><van-icon name="arrow" /></p></li>
             <li><span>关于我们</span><p><van-icon name="arrow" /></p></li>
             <li><span>意见反馈</span><p><van-icon name="arrow" /></p></li>
             <li @click="tui"><span>设置</span><p><van-icon name="arrow" /></p></li>
        </ul>
           
    
    </div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },

  methods: {
    deng(){
        this.$router.push('/login')
    },
    async gai(){
        let res=await img({file:img}).then(res=>{
            console.log(res,'ooo')
        })
    },
    //退出登录
    tui(){
        this.$router.push("/tui")
    }
},

  mounted () {
  },
}
</script> 

<style scoped lang='scss'>
.top{
    width: 100%;
    height: 400px;
    background:rgb(195, 11, 11);
    display: flex;
    align-items: center;
    justify-content: center;
   
}
.p1{
    width: 100px;
    height: 100px;
}
.p2{
    color: white;
    font-size: 30px;
    margin-top: 10px;
}
.xue{
    width: 100%;
    height: 100px;
    ul{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        li{
            text-align: center;
            font-size: 30px;
        }
        .li1{
            color: rgb(70, 142, 209);
            font-size: 30px;
        }
        .li2{
            color: rgb(204, 54, 54);
        }
        .li3{
            color: rgb(204, 54, 54);
        }
    }
}
.con{
    width: 100%;
     padding-bottom: 130px;
    ul{
        margin-top: 50px;
        width: 100%;
        background: rgb(198, 230, 243);
        li{
            background: white;
            width: 100%;
            height: 100px;
             display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            box-sizing: border-box;
            span{
                font-size: 30px;
            }
            p{
                font-size: 40px;
                .van-icon{
                    color: #ccc;
                }
            }
        }

    }
}

</style>