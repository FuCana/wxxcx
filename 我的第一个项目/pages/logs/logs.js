//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    });
    console.log("page onload");
  },

  onReady: function() {
    // Do something when page ready.
    console.log("page ready");
  },
  onShow: function() {
    // Do something when page show.
    console.log("page onshow");
  },
  onHide: function() {
    // Do something when page hide.
    console.log("page onhide");
  },
  onUnload: function() {
    // Do something when page close.
    console.log("page onUnload");
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
    console.log("page onRefresh");
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
    console.log("page onreachbottom");
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
   console.log("page share");
  },
  onError: function(msg) {
    console.log(msg)
  }
})
