<template>
   <div class='loginPage'>
        <div class='loginBox'>
            <h3>后台登录系统</h3>
            <a-input class='top20 height40' placeholder="Basic usage" />
            <a-input class='top20 height40'  placeholder="Basic usage" />
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
      async login(){
          let res = await this.$store.dispatch("LoginModule/POST_LOGIN");
          console.log(res)
      },
      goHome(){
        //   this.login()
          this.$message.success("成功")
          this.$router.push({
              path:"/home"
          })
      },
      
  },
  created(){},
}
</script>
<style lang="scss">
.loginPage{
    position: absolute;
    top:150px;
    left:0;
    right:0px;
    margin:auto;
    width: 400px;
    padding: 20px;
    padding-bottom: 30px;
    height: 300px;
    background: rgba(255,255,255,0.85);
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.loginBox{
    .top20{
        margin-top: 20px
    }
    .height40{
        height: 40px;
    }
}
</style>