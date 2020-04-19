<template>
   <div class='loginPage'>
        <div class='loginBox'>
            <h3>后台登录系统</h3>
            <a-input class='top20' placeholder="Basic usage" />
            <a-input class='top20'  placeholder="Basic usage" />
            <a-button class='top20' type="primary" @click="goHome">登录</a-button>
        </div>
   </div>
</template>
<script>
export default {
  name: "component_name",
  props:{},
  data () {
    return {
    };
  },
  methods:{
      goHome(){
          this.$message.success("成功")
          this.$router.push({
              path:"/home"
          })
      }
  },
  created(){},
}
</script>
<style lang="scss">
.loginPage{
    overflow: hidden;
}
.loginBox{
    width: 300px;
    background-color: #fff;
    margin:200px auto;
    border-radius: 10px;
    overflow: hidden;
    .top20{
        margin-top: 20px
    }
}
</style>