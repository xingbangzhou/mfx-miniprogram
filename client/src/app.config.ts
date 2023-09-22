export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/user/index",
    "pages/about/index",
  ],
  window: {
    navigationBarBackgroundColor: "#fff",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    // custom: true,
    color: "#ddd",
    selectedColor: "#36b7ab",
    // borderStyle: "black",
    // backgroundColor: "#F5F6F8",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "./assets/tabbar/index.png",
        selectedIconPath: "./assets/tabbar/index-hover.png",
        text: "首页",
      },
      {
        pagePath: "pages/user/index",
        iconPath: "./assets/tabbar/user.png",
        selectedIconPath: "./assets/tabbar/user-hover.png",
        text: "我的",
      },
    ],
  },
  cloud: true,
});
