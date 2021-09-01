<template>
    <div>
        <div class="top">
          <img :src="list.avatar" alt="">
          <span>{{list.real_name}}</span>
        </div>
        <van-tabs v-model="active">
            <van-tab title="讲师介绍">{{list.introduction}}</van-tab>
            <van-tab title="主讲课程">
                <!-- 商品卡片 -->
                  <van-card
                    :num="item.underlined_price"
                    :desc="`${item.sales_num}人已报名`"
                    :title="item.title"
                    :thumb="item.cover_img"
                    v-for="(item,index) in arr " :key="index"
                    :thumb-link="('/kx?basis_id='+item.id)"
                  />
                <!-- 商品卡片 -->
               </van-tab>  
      </van-tabs>
    </div>
</template>

<script>
import { teacher,mainCourse } from "@/http/api";
export default {
  components: {},
  data () {
    return {
      id:this.$route.query.teacher_id,
      list:{},
      active:0,
      arr:[]
    }
  },

  // 组件方法
  methods: {
     async getlist(){
       console.log(this.id,"id");
         let res=await teacher(this.id)
         console.log(res.data.teacher,"qqq")
         this.list=res.data.teacher
     },
     async getxiang(){  
         let res=await mainCourse(this.add)
          console.log(res.data.list,"列表")
          this.arr=res.data.list
     }
  },


  computed: {},

  mounted () {
    var add=this.$route.query.teacher_id
    console.log(add,"ppp")
      this.getlist()
      this.getxiang(add)
      
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