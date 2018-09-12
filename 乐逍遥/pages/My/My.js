// pages/My/My.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nick: '',
    avataurl:''
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      nick: app.globalData.nick,
      avataurl: app.globalData.avataurl
    })
  },
  diancan: function () {
    wx.switchTab({
      url: "/pages/Order/Order"
    })
  },
  duihuan: function () {
    wx.navigateTo({
      url: "/pages/Exchange/Exchange"
    })
  },
  woshishangjia: function () {
    wx.navigateTo({
      url: "/pages/ApplicationForm/ApplicationForm"
    })
  },
  woshishangjia: function () {
    wx.navigateTo({
      url: "/pages/My_Merchant/My_Merchant"
    })
  },
  xiaji: function () {
    wx.navigateTo({
      url: "/pages/MySubordinates/MySubordinates"
    })
  },
  fandian: function () {
    wx.navigateTo({
      url: "/pages/MyReturn/MyReturn"
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})