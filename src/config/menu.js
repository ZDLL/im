const menu=[
    {
      name: "首页",
      router: "/home",
      children: false
    },
    {
      name: "后台管理",
      router: "/adminmanger", // 点击这个菜单不会跳转 只会展开 此处的router是为了设置key属性
      children: [
        {
          name: "修改总后台密码",
          router: "/changePwd"
        },
        {
          name: "子管理员管理",
          router: "/subManger"
        },
         {
          name: "配置Logo",
          router: "3"
        },
         {
          name: "配置网页图标",
          router: "4"
        },
      ]
    }
  ]
export default menu