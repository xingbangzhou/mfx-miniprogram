export default defineAppConfig({
  cloud: true,
  pages: [
    "pages/home/index",
    "pages/manage/index",
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
        iconPath: 'assets/tab-bar/home.png',
        selectedIconPath: 'assets/tab-bar/home-active.png',
      },
      {
        pagePath: 'pages/manage/index',
        text: 'manage',
        iconPath: 'assets/tab-bar/manage.png',
        selectedIconPath: 'assets/tab-bar/manage-active.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: 'mine',
        iconPath: 'assets/tab-bar/mine.png',
        selectedIconPath: 'assets/tab-bar/mine-active.png',
      }
    ],
  },
  window: {}
});
