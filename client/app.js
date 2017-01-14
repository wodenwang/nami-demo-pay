import nami from '/nami/index';

App({
  data: {
    userInfo: null,
    rankLoaded: false //排行榜已加载
  },

  onLaunch: function () {
    var app = this;
    //登录
    nami.login(() => {
      nami.getUserInfo((userInfo) => {
        console.log("已获取数据", userInfo);
        app.data.userInfo = userInfo;
      }, () => {
        console.log("用户拒绝提供信息");
      });
    });
  }
})