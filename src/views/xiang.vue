<template>
    <div>
        <div class="top">
          <img :src="list.avatar" alt="">
          <span>{{list.real_name}}</span>
        </div>
        <van-tabs v-model="active">
            <van-tab title="讲师介绍">{{list.introduction}}</van-tab>
            <van-tab title="主讲课程">内容 2</van-tab>
      </van-tabs>
    </div>
</template>

<script>
import { teacher } from "@/http/api";
export default {
  components: {},
  data () {
    return {
      id:this.$route.query.teacher_id,
      list:{}
    }
  },

  // 组件方法
  methods: {
     async getlist(){
       console.log(this.id,"id");
         let res=await teacher(this.id)
         console.log(res.data.teacher,"qqq")
         this.list=res.data.teacher
     }
  },


  computed: {},

  mounted () {
      this.getlist()
  },
}
</script> 

<style scoped lang='scss' >
.top{
  width: 80%;
  margin: 100px auto;
  display: flex;
  img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  span{
    margin-left: 50px;
    margin-top: 20px;
  }
}

</style>