var config = require('../config')
var constant = require('./constant')

var request = options => {
    var data = options.data || {};
    data.nami_token = wx.getStorageSync(constant.NAMI_TOKEN);//每次请求组装上token

    var url = options.url;
    if (url.indexOf("http") != 0) {
        url = `${config.host}${url}`;
    }

    if (options.loading) {
        /*
        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 10000
        })*/
        wx.showNavigationBarLoading();
    };

    wx.request({
        url: url,
        data: data,
        complete: function (res) {
            if (options.loading) {
                /*
                 wx.hideToast();*/
                wx.hideNavigationBarLoading();
            }

            if (res.statusCode != 200) {//失败
                console.error("失败", options.url, res);
                typeof options.fail == "function" && options.fail(res);
            } else {//成功
                console.log("成功", options.url, res);
                typeof options.success == "function" && options.success(res);
            }
        }
    });
}

module.exports = {
    request: request
}