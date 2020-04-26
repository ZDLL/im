<template>
  <div class='minPage'>

    <a-layout id="components-layout-demo-responsive">
      <Nav @menuClick='menuData'></Nav>
      <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: 0 }" />
        <div v-if='samllMenu.length>0' class='smallNav'>
          <span 
          class="smallRou"
          v-for="(item,inx) in samllMenu" 
          :key='inx' 
          @click.stop="tagClick(item)">
            {{item.name}}
            <!-- <a-icon type="close-circle" /> -->
            <a-icon @click.stop="closeTag(inx)" class="tagClose" type="close-circle" />
          </span>
        </div>
        <a-layout-content :style="{ margin: '20px 20px 0' }">
          <div id='minScoll' :style="{ padding: '20px', background: '#fff',height:'100%',overflow: 'auto'}">
               <transition :name="transitionName">
                  <router-view></router-view>
               </transition>
          </div>
        </a-layout-content>
        <a-layout-footer  style="textAlign: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>

  </div>
</template>
<script>
import Nav from '../../components/nav/nav'
export default {
  name: "component_name",
  props: {},
  data() {
    return {
      samllMenu:[],
      transitionName:''
    };
  },
  components:{
    Nav
  },

watch: {
  $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态c
      console.log(to.meta.index)
      if(to.meta.index > from.meta.index){
	    //设置动画名称
      console.log(",,,,,,")
        this.transitionName = 'slide-left';
      }else{
           console.log("222222,")
        this.transitionName = 'slide-right';
      }
    }
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    closeTag(inx){
      this.samllMenu.splice(inx,1)
    },
    menuData(data){
      this.samllMenu.push(data.data)
      this.samllMenu=Array.from(new Set(this.samllMenu))
      console.log(data.data)
      this.$router.push({
        path:data.data.router
      }) 
    },
    tagClick(data){
      //console.log(this.$route.path)
      if(data.path != this.$route.path){
        this.$router.push({
          path:data.path
        })
      }
    }
  },
  created() {}
};
</script>
<style lang="scss">
.navBox{
  background:#000c17;
}
.minPage {
  height: 100%;
  overflow:hidden;
}
#components-layout-demo-responsive {
  height: 100%;
}
.smallNav{
  // background-color: #eee;
  width: 100%;
  padding: 0 20px;
  text-align: left;
  margin-top: 20px;
}
.ant-layout-content{
  text-align: left;
}
.smallRou{
  padding: 5px 8px;
  border: 1px #e5e5e5 solid;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 10px;
  margin-top: 10px;
  position: relative;
  font-size: 14px;
  .tagClose{
    position: absolute;
    right: -7px;
    font-size: 14px;
    color: #999;
    top: -5px;
    z-index: 3;
  }
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
}
</style>