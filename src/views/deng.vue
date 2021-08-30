<template>
    <div>
      <div class="tu">
          <img src="@/assets/1.png" alt="">
      </div>
      <div class="ge"></div>
      <p class="p1">
          <van-field
            v-model="tel"
            center
            clearable
           placeholder="请输入手机号"
            >
            <template #button>
                <van-button type="default" class="btn" v-if="!isshow" @click="list">{{txt}}</van-button>
            </template>
          </van-field>
      </p>
      <p class="p2">
          <van-cell-group>
              <van-field v-model="code" placeholder="请输入短信验证码"  />
          </van-cell-group>
      </p>
       <p class="p3">
           <van-cell-group>
            <van-field
                required
                placeholder="未注册的手机号将自动注册"
            >
             <template #button>
                <van-button type="default" class="btn1" @click="go" >密码登录</van-button>
            </template>
            </van-field>
            </van-cell-group>
       </p>
       <p class="p4">
         <van-button type="danger" size="large" >登录</van-button>
       </p>
       <p class="p5">
             <img src="@/assets/2.png" alt="">
             我同意
            <span> 用户注册协议</span>
            和 
            <span>隐私保护协议</span> 
        
       </p>
    </div>
</template>

<script>
import { smsCode, login } from "@/http/api";
import { setInterval, clearInterval } from 'timers';
export default {
  components: {},
  data() {
    return {
      tel: "",
      code: "",
      isshow: false,
      txt: "获取验证码登录",
    };
  },

  // 组件方法
  methods: {
    async list() {
      var reg = /^1[35789]\d{9}$/;
      if (!reg.test(this.tel)) {
        this.$toast.fail("手机号格式错误");
        return false;
      }
      this.time=3
      this.isshow = true;
      var timer=setInterval(()=>{
        this.txt=`还有${this.time}秒后登录`
        this.time--
        if(this.time<=0){
          this.fail=false
          clearInterval(timer)
          this.txt="获取登录验证码"
        }
      },1000)
      let res = await smsCode({ mobile: this.tel, sms_type: "login" })  
    },

    //登录
    async login() {
      let res = await login({
        mobile: this.tel,
        sms_code: this.code,
        type: 2,
        client: '1'
      }).then(res => {
        if (res.code == 200) {
        //    var obj = {
        //     mobile: this.tel,
        //     sms_code: this.code
        // };
        // localStorage.setItem("list", JSON.stringify(obj));
          this.$store.commit("setToken",res.data.remember_token)
          this.$router.push("/set");
          console.log(res.data.remember_token)
          
        }
      });
    },
    //密码注册页面
    go(){
        this.$router.push('/set')
    }
  },
  created() {}
};
</script> 

<style scoped lang='scss' >
.tu {
  width: 100%;
  img {
    width: 100%;  

  }
}
.ge {
  width: 100%;
  height: 10px;
  background: rgb(243, 243, 243);
}
.p1 {
  width: 80%;
  margin: 0 auto;
  .btn {
    border: 0;
    color: red;
  }
}
.p2 {
  width: 80%;
  margin:0 auto;
  margin-top: 50px;

}
.p3 {
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  .van-cell-group {
    width: 100%;
    .btn1 {
      border: 0;
      color: #ccc;
    }
  }
}
.p4 {
  width: 80%;
  margin: 20px auto;
  margin-top: 50px;
}
.p5 {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin-top: 50px;

  img {
    width: 12px;
    height: 12px;
  }
  span {
    color: red;
    padding: 0 5px;
  }
}
</style>