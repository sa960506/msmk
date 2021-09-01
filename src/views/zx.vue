<template>
    <div class="zx">
       <div class="top">
           <img :src="list.thumb_img" alt="">
       </div>
      <p class="p1">{{list.title}}</p>
       <p class="p2"><span>{{list.click_rate}}次预览</span></p>
       <p class="p3">{{list.description}}</p>
       <div class="con" v-html="list.content"></div>
    </div>
</template>

<script>
import { detail} from "@/http/api";
export default {
  components: {},
  data () {
    return {
        id:this.$route.query.cid,
        list:[]
    }
  },

  // 组件方法
  methods: {
      async getlist(){
          console.log(this.id);
          let res=await detail({information_id:this.id})
          console.log(res,"qqq")
          this.list=res.data
      }

  },


  computed: {},

  mounted () {
      this.getlist()
  },
}
</script> 

<style scoped lang='scss' >
.zx{
    width: 100%;
    .top{
        width: 100%;
        img{
            width: 100%;
            height: 400px;
        }
    }
    .p1{
        font-size: 40px;
        margin-top: 30px;
        margin-left: 30px;
    }
    .p2{
        margin-top: 30px;
        margin-left: 30px;
        color: #ccc;
    }
    .p3{
        margin-top: 30px;
        margin-left: 30px;
        color: #ccc; 
        font-size: 30px;
        text-align: center;
    }
    .con{
        font-size: 50px;
        margin-left: 30px;
        margin-top: 100px;
    }
}

</style>