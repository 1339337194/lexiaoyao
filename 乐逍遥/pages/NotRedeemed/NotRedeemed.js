// pages/NotRedeemed/NotRedeemed.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    url:'',
    order:'',
    img: app.globalData.imgurl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    this.setData({
      name: options.name,
      url: app.globalData.imgurl + options.url,
    })
    var that = this;
    wx.request({
      url: app.globalData.url + 'index/getworder', //仅为示例，并非真实的接口地址
      data: {
        code: options.code
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          order: res.data.data
        })

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  shenqingtuikuan: function () {
var that=this;
    console.log(that.data.order.total)
    wx.navigateTo({
      url: "/pages/Request_a_refund/Request_a_refund?total=" + that.data.order.total + '&code='+that.data.order.code
    })
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