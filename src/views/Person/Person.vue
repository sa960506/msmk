<template>
<div class="person">
    <div class="top" @click="deng">
       <div class="item">
           <p><img src="@/assets/3.png" alt="" class="p1"></p>
            <p class="p2"> 登录/注册</p>
       </div>
    </div>
    <div class="xue">
        <ul>
            <li>
                <p class="li1">0</p>
                <p>我的学习</p>
            </li>
             <li>
                <p class="li2">0</p>
                <p>本周课时</p>
            </li>
             <li>
                <p class="li3">0</p>
                <p>我的积分</p>
            </li>
        </ul>
    </div>
 <van-cell value="内容" is-link>
  <!-- 使用 title 插槽来自定义标题 -->
  <template #title>
    <span class="custom-title">单元格</span>
    <van-tag type="danger">标签</van-tag>
  </template>
</van-cell>

<van-cell title="单元格" icon="shop-o">
  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
  <template #right-icon>
    <van-icon name="search" class="search-icon" />
  </template>
</van-cell>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },

  methods: {
    deng(){
        this.$router.push('/index')
    },
    async gai(){
        let res=await img({file:img}).then(res=>{
            console.log(res,'ooo')
        })
    }
},

  mounted () {
  },
}
</script> 

<style scoped lang='scss'>
.top{
    width: 100%;
    height: 400px;
    background:rgb(195, 11, 11);
    display: flex;
    align-items: center;
    justify-content: center;

}
.p1{
    width: 100px;
    height: 100px;
}
.p2{
    color: white;
    font-size: 30px;
    margin-top: 10px;
}
.xue{
    width: 100%;
    height: 100px;
    ul{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        li{
            text-align: center;
            font-size: 30px;
        }
        .li1{
            color: rgb(70, 142, 209);
            font-size: 30px;
        }
        .li2{
            color: rgb(204, 54, 54);
        }
        .li3{
            color: rgb(204, 54, 54);
        }
    }
}

</style>