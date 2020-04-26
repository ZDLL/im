<template>
  <div class='navBox'>
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        :openKeys="openKeys" 
        @openChange="onOpenChange"
        :defaultSelectedKeys="defaultSelectedKeys"
        :style="{ height: '100%', borderRight: 0 }"
       >
        <template v-for="item in menuList">
            
          <a-menu-item
            v-if="item.children === false"
            :key="item.router"
            :style="{textAlign: 'left'}"
            @click="clickItem(item)"
            > 
            <a-icon type="user" />
            <span>{{ item.name }}</span>
          </a-menu-item>
          <a-sub-menu
            v-else
            :key="item.router"
             :style="{textAlign: 'left'}"
            > 
            <span slot="title"><span>{{ item.name }}</span></span>
            <a-menu-item
              v-for="menuChildren in item.children"
              :key="menuChildren.router"
                @click="clickItem(menuChildren)"
            >{{ menuChildren.name }}</a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
  </div>
</template>
<script>
import menu from '../../config/menu'
export default {
  name: "component_name",
  props: {},
  data() {
    return {
    defaultSelectedKeys: [this.$route.path],
      openKeys: [''],
      menuList: menu
    };
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    xhmenu(result) {
      for (let i = 0; i < this.menuList.length; i++) { 
      //循环【顶级菜单数组列表】 循环的数组下标用i表示
        if (result[i].children !== false) {  
        // 如果这个菜单没有【子菜单】 就不继续了（没有子菜单就是【点击可跳转页面但不会展开】的顶级菜单）
          for (let y = 0; y < result[i].children.length; y++) {  
          // 循环【顶级菜单】的子菜单数组（二级菜单）数组下标用y表示
            if (result[i].children[y].router === this.$route.path) { 
            // 如果子菜单的router数据和当前路由地址一样 则断定现在的页面就停留在这个数组对应的菜单中
              this.openKeys = [result[i].router]
              // 那么就把【顶级菜单（循环数组下标为i）的router属性】赋值给this.openKeys【data中当前展开的菜单】
            }
          }
        }
      }
    },
    onOpenChange(openKeys) {  // 当菜单被展开时触发此处
      /* 
      经测试传入的变量openKeys是数组 点击已经展开的菜单时传入的是空数组
      点击未展开的菜单时传入的是[当前展开菜单的key,点击的菜单key]
      下面的if判断用openKeys === [] 无效 所以我只能判断数组length是否等于0
      */
      if (openKeys.length !== 0) {  
        this.openKeys = [openKeys[1]]
      } else {
        this.openKeys = ['']
      }
    },
    clickItem(obj) {
        console.log(obj)
        this.$emit("menuClick",{data:obj})
    //   this.$router.push(obj.key)
    }
  },
  created() {
      this.xhmenu(this.menuList)
  }
};
</script>
<style lang="scss">
</style>