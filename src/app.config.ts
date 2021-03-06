export default {
  pages: [
    'pages/login/index',
    'pages/index/index',
    'pages/search/index',
    'pages/mine/index',
    'pages/default/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#296dd3',
    navigationBarTitleText: '源诚数据资产平台',
    navigationBarTextStyle: 'white',
    navigationStyle: 'custom',
  },
  tabBar: {
    borderStyle: 'white',
    color: '#7D8699',
    selectedColor: '#397AE7',
    list: [{
      pagePath: 'pages/index/index',
      text: '结构化账号',
      iconPath: './assets/img/tab-bar/home.png',
      selectedIconPath: './assets/img/tab-bar/home-active.png',
    }, {
      pagePath: 'pages/mine/index',
      text: '我的',
      iconPath: './assets/img/tab-bar/user.png',
      selectedIconPath: './assets/img/tab-bar/user-active.png',
    }],
  },
  entryPagePath: 'pages/default/index', // 指定小程序的默认启动路径
};
