<template>
<div>
    <van-tabs >
            <van-tab v-model="active" v-for="(item,index) in tou" :key="index" :title="item.name">
                <van-tabs v-model="activea">
                    <van-tab :title="ite.name" v-for="(ite,ind) in item.child" :key="ind">
                        <van-tabs v-model="activec">
                            <van-tab title="按时间">内容 1</van-tab>
                            <van-tab title="按热度">内容 2</van-tab>
                            <van-tab title="按价格">内容 3</van-tab>
                        </van-tabs>
                    </van-tab>
                </van-tabs>
            </van-tab>
    </van-tabs>
</div>
</template>

<script>
import { classify} from "@/http/api";
export default {
  components: {},
  data () {
    return {
        tou:[],
        active:0,
        activea:0,
        activea:0,
        activec:0
    }
  },

  methods: {
    async gettou(){
        let res=await classify()
        console.log(res,"ooo")
        this.tou=res.data
    }
 },

  mounted () {
    this.gettou()
  },
}
</script> 

<style scoped lang='scss'>

</style>