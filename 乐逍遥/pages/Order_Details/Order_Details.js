// pages/Order_Details/Order_Details.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    url:'',
    img:  app.globalData.imgurl,
    goods:'',
    lxr:'',
    phone:'',
    num:'',
    times:'',
    total:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
      this.setData({
        name:options.name,
        url: app.globalData.imgurl+options.url,
      })

    wx.request({
      url: app.globalData.url + 'index/getorders', //仅为示例，并非真实的接口地址
      data: {
        code: options.code,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res.data.data);
        console.log(JSON.parse(res.data.data.orders).length);
        that.setData({
          goods: JSON.parse(res.data.data.orders),
          lxr: res.data.data.name,
          phone: res.data.data.phone,
          num: JSON.parse(res.data.data.orders).length,
          times: res.data.data.intime,
          total: res.data.data.total,
        })

      }
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