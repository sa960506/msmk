<template>
<div>
    <van-tabs >
            <van-tab v-model="active" v-for="(item,index) in tou" :key="index" :title="item.name"></van-tab>
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
        active:0
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