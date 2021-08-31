<template>
    <div class="qian">
        <div class="top">
            <div class="left">
                <img src="http://120.53.31.103:84/uploads/avatar.jpg" alt="" class="img">
                <div>
                    <p>{{$store.state.token.mobile}}</p>
                    <p>积分:2</p>
                </div>
            </div>
            <p class="p1">签到规则</p>
        </div>
        <div class="qi">
            <van-calendar
            :show-title="false"
            :poppable="false"
            :show-confirm="false"
            :style="{ height: '300px' }"
            />
        </div>
        <div class="con">
            <div class="one">
                <p class="p4">好课推荐</p>
                <p class="p5">更多 ></p>
            </div>
            <div class="two">
                <img src="http://120.53.31.103:84/uploads/image/2021-01-21/0iHDEF8fiqFAern6hLl0erzc1P1d94OAHUPkgNBw.jpeg" alt="">
                <div class="a">
                    <p>论渣男的自我修养</p>
                    <span>1积分</span>
                </div>
                <p class="pp">去兑换</p>
            </div>

             <div class="one">
                <p class="p4">热门图书</p>
                <p class="p5">更多 ></p>
            </div>
            <div class="two">
               <img src="http://120.53.31.103:84/uploads/image/2021-04-07/H2FyMmqIV87LZIUR0qG1AQziJsgVtgGcidQFoGZz.jpeg" alt="">
                <div class="a">
                    <p>VUE开发后台管理系统</p>
                    <span>1积分</span>
                </div>
                <p class="pp">去兑换</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
         text: '',
      show: false,
    }
  },

  // 组件方法
  methods: {
      onConfirm(date) {
      this.show = false;
      this.text = `选择了 ${date.length} 个日期`;
    },
  },


  computed: {},

  mounted () {
  },
}
</script> 

<style scoped lang='scss' >
.qian{
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 200px;
    .top{
        width: 100%;
        height: 450px;
        background: rgb(238, 92, 92);
        display: flex;
        justify-content: space-between;
        padding: 0 50px;
        box-sizing: border-box;
        .left{
            display: flex;
            margin-top: 50px;
        
            .img{
                width: 70px;
                height: 70px;
                border-radius: 50px;
            }
            div{
                color: white;
                margin-left: 20px;
            }
        }
        .p1{
            margin-top: 60px;
            width: 100px;
            height: 30px;
            font-size: 12px;
            border: 1px white solid;
            color: white;
            line-height: 30px;
            text-align: center;
            border-radius: 30px;
        }
    }
    .qi{
       position: absolute;
       left: 100px;
       top: 150px;
       width: 80%;
       height: 200px;
      .van-calendar{
          width: 100%;
          height: 100%;
          border-radius: 20px;
      }
    }
    .con{
        width: 100%;
        margin-top: 260px;
        .one{
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 30px;
            box-sizing: border-box;
            margin-top: 30px;
            .p4{
              color: rgb(185, 181, 181);
                padding-left: 10px;
              &:before{
                content: "|";
                width: 10px;
                height: 10px;
                font-size: 22px;
                font-weight: 900;
                background: rgb(233, 18, 18);
                color:rgb(233, 18, 18); 
            }
            }
            .p5{
                  color: rgb(185, 181, 181);
            }
            
        }
        .two{
            margin-top: 30px;
            width: 100%;
            display: flex;
            height: 150px;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
          
            img{
                width: 200px;
                height: 150px;
            }
            .a{
                height: 200px;
                span{
                    display: block;
                    margin-top: 90px;
                    color: red;
                }
            }
            .pp{
               margin-top: 90px;
               padding: 0 20px;
               border: 1px #ccc solid;
               border-radius: 30px;
                margin-right: 20px; 
                
            }
        }
    }

}

</style>