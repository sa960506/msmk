<template>
<div>
    <van-tabs @click="onTabChange">
            <van-tab v-model="active" v-for="(item,index) in tou" :key="index" :title="item.name">
                <div class="one">
                    <ul>
                        <li v-for="(item,index) in sect" :key="index" @click="qie(index)" :class="[xiu==index?'gai':'']">{{item.name}}</li>
                    </ul>
                </div>
                <!-- 按时间 -->
                 <van-tabs  v-model="activea">
                    <van-tab title="按时间">
                        <!-- 全部 时间数据 -->
                        <div>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </van-tab>
                    <van-tab title="按热度"></van-tab>
                    <van-tab title="按价格"></van-tab>
                </van-tabs>
            </van-tab>
    </van-tabs>
</div>
</template>

<script>
import { classify ,tu} from "@/http/api";
export default {
  components: {},
  data() {
    return {
      tou: [],
      active: 0,
      activea: 0,
      sect:[],
      xiu:0,
     
    };
  },

  methods: {
    onTabChange(index) {
      this.active = index;
      this.sect = this.tou[this.active].child;
      console.log(this.sect, "科幻");
    },
    async gettou() {
      let res = await classify();
    //   console.log(res, "ooo");
      this.tou = res.data;
    },
    qie(index){
        this.xiu=index
    },
     async getquan() {
      let res = await tu({page: 1,limit: 10,order:id});
      console.log(res, "全部");
      
    },


  },

  mounted() {
    this.gettou();
    this.getquan()  }
};
</script> 

<style scoped lang='scss'>
.one{
    width: 100%;
    height: 50px;
    ul{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
            background: rgb(228, 228, 228);
            border-radius: 20%;
        }
        .gai{
            border-bottom: 5px solid red;
        }
        
    }
}
</style>