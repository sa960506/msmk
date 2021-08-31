<template>
    <div class="teacher">
        <div class="list" v-for="(item,index) in list" :key="index" >
            <img :src="item.avatar" alt="" class="img">
            <div class="item">
                <p>{{item.real_name}}</p>
                <span>{{item.introduction}}</span>
            </div>
        </div>
        <p class="pp">没有更多了</p>
    </div>
</template> 
<script>
import { config } from "@/http/api";
export default {
  components: {},
  data () {
    return {
        list:[]
    }
  },

  methods: {
        async getlist(){
            let res=await config()
            console.log(res.data.list,"ooo")
            this.list=res.data.list
        }
    },

  mounted () {
    this.getlist()
  },
}
</script> 

<style scoped lang='scss'>
.teacher{
    width:100%;
    height:100%;
    background:rgb(248, 248, 248);
    padding-bottom: 100px;
    .list{
        width: 90%;
        height: 200px;
        display: flex;
        align-items: center;
        background: white;
        margin: 10px auto;
        border-radius: 10px;
        .img{
            width: 100px;
            height: 100px;
            border-radius: 50px;
        }
        .item{
            margin-left: 30px;
        }
    }
    .pp{
        width: 100%;
        height: 100px;
        text-align: center;
        line-height: 100px;
    }
   
}
</style>