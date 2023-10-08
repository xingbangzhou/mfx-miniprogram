export default defineAppConfig({
  cloud: true,
  pages: [
    "pages/home/index",
    "pages/interest/index",
    "pages/mine/index",
    "pages/login/index",
  ],
  tabBar: {
    custom: true,
    color: '#a1a7b3',
    selectedColor: '#1492ff',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/home/index',
        text: 'home',
        iconPath: 'assets/home.png',
        selectedIconPath: 'assets/home-active.png',
      },
      {
        pagePath: 'pages/interest/index',
        text: 'interest',
        iconPath: 'assets/interest.png',
        selectedIconPath: 'assets/interest.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: 'mine',
        iconPath: 'assets/mine.png',
        selectedIconPath: 'assets/mine-active.png',
      }
    ],
  },
  window: {
    navigationBarBackgroundColor: "#fff",
    navigationBarTextStyle: "black",
  }
});
