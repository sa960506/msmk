<template>
    <div class="tui">
        <p><input type="text" placeholder="设置密码"><span><van-icon name="arrow" /></span></p>
         <p><input type="text" placeholder="注销账号"><span><van-icon name="arrow" /></span></p>
         <p><van-button type="danger" @click="che">危险按钮</van-button></p>
    </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },

  // 组件方法
  methods: {
      che(){
          this.$store.commit('zhe')
          this.$router.push('/Person')
      }
  },


  computed: {},

  mounted () {
  },
}
</script> 

<style scoped lang='scss' >
.tui{
    width: 100%;
    p{
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-items: center;
        input{
            width: 90%;
            height: 60px;
            border: 0;
            padding-left: 10px; 
        }
        .van-icon{
            font-size: 40px;
            color: #ccc;
        }
        .van-button{
            width: 100%;
           
        }
    }
}

</style>