
import nami from '../../nami/index';
var app = getApp();

Page({
  data: {
    logo: '/images/logo.jpg',
    title: '全栈生姜头',
    prices: [
      0.01, 0.05, 18, 48, 98, 188
    ]
  },

  /**
   * 进入页面
   */
  onLoad: function () {
    console.log("进入首页");

  },

  /**
   * 分享
   */
  onShareAppMessage: function () {
    return {
      title: '赞赏全栈生姜头',
      desc: '点滴支持,是我继续坚持的动力',
      path: '/pages/index/index'
    }
  },

  /**
   * 选中赞赏金额
   */
  selectItem: function (event) {
    var total = event.currentTarget.dataset.item;
    var that = this;
    that.setData({ selected: total });

    nami.request({
      loading: true,
      url: '/request/scholes_pay/pay.groovy',
      data: {
        total: total * 100
      },
      success: function (res) {
        console.log("获取支付密匙", res);

        wx.requestPayment({
          timeStamp: '' + res.data.signature.timestamp,
          nonceStr: res.data.signature.nonce,
          package: res.data.signature.pack,
          signType: 'MD5',
          paySign: res.data.signature.signature,
          success: function (res) {
            app.data.rankLoaded = false;//通知排行榜重新加载
            wx.showToast({
              title: '支付成功,感谢',
              icon: 'success'
            });
          },
          fail: function (res) {
            wx.showToast({
              title: '已取消支付',
              icon: 'success'
            });
          },
          complete: function () {
            that.setData({ selected: 0 });//取消选中
          }
        });

      },
      fail: function (res) {
        //弹出对话框提示支付失败信息
        wx.showModal({
          showCancel: false,
          title: '提示',
          content: res.data.msg,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定');
              nami.getUserInfo((userInfo) => {
                console.log("已获取数据", userInfo);
                app.data.userInfo = userInfo;
              }, () => {
                console.log("用户拒绝提供信息");
              });
            }
          }
        });
        that.setData({ selected: 0 });//取消选中
      }
    });
  }
})
