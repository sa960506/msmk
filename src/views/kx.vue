<template>
    <div class="kx">
        <div class="banner">
            <img :src="list.cover_img" alt="">
        </div>
        <div class="one">
            <p class="p1">{{list.title}}</p>
            <p class="p2">共{{list.is_free}}课时 | {{list.sales_num}}人已报名</p>
            <p class="p3">开课时间:{{list.start_play_date |fomartTime('yyyy/MM/dd hh:mm')}}---{{list.start_play_date | fomartTime('yyyy/MM/dd hh:mm')}}</p>
            <p class="p4">免费</p>
        </div>
        <div class="two">
            <van-cell title="课程售后" is-link value="详情" /> 
            <!-- <van-dialog v-model="show" title="标题" show-cancel-button>
                    <img src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
                </van-dialog> -->
        </div>
        <div class="tree">
            <div class="top">数学团队</div>
            <div class="item">
                <div v-for="(item,index) in arr" :key="index">
                    <img :src="item.teacher_avatar" alt="">
                    <p>{{item.teacher_name}}</p>
                </div>
            </div>
        </div> 
        <div class="si">
            <van-tabs v-model="active">
                <van-tab title="课程介绍"></van-tab>
                <van-tab title="课程大纲"></van-tab>
                <van-tab title="课程评价"></van-tab>
            </van-tabs>
            <div>
                <p>课程介绍</p>
                <div>sdfgvb</div>
                <div>sdfvbasdcf</div>
            </div>
        </div>
        <div class="wu">
             <p>课程大纲</p>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value1" :options="option1" />
                   
                </van-dropdown-menu>
        </div>
        <div class="liu">
            <p>课程评价</p>

            <div>
               <img src="http://120.53.31.103:86/img/empty.0d284c2e.png" alt="" class="img">
                <p>暂无评论</p>
            </div>
            <button class="btn" @click="go">立即报名</button>
           
        </div>
  
    </div>
</template>

<script>
import { courseInfo } from "@/http/api";
export default {
  components: {},
  data() {
    return {
      basis_id: this.$route.query.basis_id,
      list: [],
        show: false,
        arr:[],
        active:0,
         value1: 0,
      option1: [
        { text: '字符的魅力', value: 0 },
      ],
    };
  },

  // 组件方法
  methods: {
    async getlist() {
      console.log(this.basis_id, "id");
      let res = await courseInfo(this.basis_id);
      console.log(res.data, "列表");
      this.list = res.data.info;
      this.arr=res.data.teachers
    },
    go(){
         this.$toast('你来晚了哦 ,名额已经没有了');
    }
   

  },

  computed: {},

  mounted() {
    this.getlist();
  }
};
</script> 

<style scoped lang='scss' >
.kx {
    width: 100%;
    height: 100%;
    background: rgb(239, 247, 248);
    padding-bottom: 850px;
  .banner {
    width: 100%;
    img {
      width: 50%;
      height: 450px;
    }
  }
  .one{
      background: white;
      width: 100%;
      height: 300px;
      overflow: hidden;
      .p1{
          margin-top: 30px;
          margin-left: 30px;
          font-size: 30px;
      }
      .p2{
           margin-top: 30px;
          margin-left: 30px;
          font-size: 30px;
          color: #ccc;
      }
    .p3{
           margin-top: 30px;
          margin-left: 30px;
          font-size: 30px;
          color: #ccc;
      }
      .p4{
        margin-top: 30px;
          margin-left: 30px;
          font-size: 35px;
          color: red;
      }
  }
  .two{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: white;
      margin: 30px 0;
      color: rgb(196, 196, 196);
      span{
          width: 30px;
          margin-left: 30px;
      }
      .van-share-sheet{
          height: 300px;
      }
  }
  .tree{
      width: 100%;
      background: white;
      overflow: hidden;
      .top{
        margin-top: 30px;
          margin-left: 30px;
          font-size: 30px;
      }
     .item{
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: space-around;
         div{
             width: 20%;
             text-align: center;
             padding: 50px 0;
             color: #ccc;
             img{
               
                 width: 100px;
                 height: 100px;
                 border-radius: 50%;
                 margin: 0 auto;

             }
         }
     }
  }
  .si{
        width: 100%;
      background: white;
      overflow: hidden;
      margin-top: 30px;
      p{
        font-size: 30px;
         padding-left: 25px;
         padding-top: 30px;
      }
      div{
        font-size: 28px;
         padding-left: 30px;
         padding-top: 30px;
      }
  }
    .wu{
        width: 100%;
      background: white;
      overflow: hidden;
      margin-top: 30px;
       p{
        font-size: 30px;
         padding-left: 25px;
         padding-top: 30px;
      }
  }
     .liu{
        width: 100%;
        background: white;
        overflow: hidden;
        margin-top: 30px;
        p{
            font-size: 30px;
            padding-left: 25px;
            padding-top: 30px;
        }
        div{
          width: 100%;
          margin: 0 auto;
           
            .img{
                width: 200px;
                height: 200px;
                display: block;
                margin: 0 auto;
            }
            p{
                text-align: center;
            }
        }
        .btn{
                width: 100%;
                height: 70px;
                border: 0;
                background: red;
                border-radius: 30px;
                color:white;
                margin-top: 10px;
                padding: 0 20px;
                position: fixed;
                left: 0;
                bottom: 0;

            }
  }
}
</style>