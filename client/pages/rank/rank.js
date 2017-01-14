import nami from '../../nami/index';
var app = getApp();

Page({
    data: {
        dataList: []
    },

    /**
     * 进入页面
     */
    onLoad: function () {
    },

    /**
     * 
     */
    onShow: function () {
        var that = this;
        if (!app.data.rankLoaded) {//未加载数据则加载
            nami.request({
                loading: true,
                url: '/request/scholes_pay/rank.groovy',
                success: function (res) {
                    that.setData({
                        dataList: res.data.list
                    });
                    app.data.rankLoaded = true;//加载完成
                }
            });
        }
    },

    onShareAppMessage: function () {
        return {
            title: '赞赏排行榜',
            desc: '点滴支持,是生姜头继续坚持的动力',
            path: '/pages/rank/rank'
        }
    }
})
