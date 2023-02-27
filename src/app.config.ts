export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'MfxApp',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#3cc51f',
    borderStyle: 'white',
    backgroundColor: '#ffffff',
    custom: true,
    list: [{
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      pagePath: 'pages/user/index',
      text: '用户'
    }]
  }
})
