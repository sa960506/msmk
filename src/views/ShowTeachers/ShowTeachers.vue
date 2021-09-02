<template>
    <div class="teacher">

            <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
                 <!-- 之前的 -->
                <div class="list" v-for="(item,index) in list" :key="index" @click="$router.push('/xiang?teacher_id='+item.id)">
                    <img :src="item.avatar" alt="" class="img">
                    <div class="item">
                        <p>{{item.real_name}}</p>
                        <span>{{item.introduction}}</span>
                    </div>
                </div>
                <!-- 之前的 -->
                    
            </van-list>
    
    </div>
</template> 
<script>
import { config } from "@/http/api";
export default {
  components: {},
  data () {
    return {
        list:[],
         loading: false,
        finished: false,
    }
  },

  methods: {
        async getlist(){
            let res=await config()
            console.log(res.data.list,"ooo")
            this.list=res.data.list
        },

         onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
            for (let i = 0; i < this.list.length; i++) {
            this.list.push(this.list.length + 1);
            }

            // 加载状态结束
            this.loading = false;

            // 数据全部加载完成
            if (this.list.length >= this.list.length) {
            this.finished = true;
            }
            }, 1000);
        },
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