// pages/Agritainment/Agritainment.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mch: '',
    img: app.globalData.imgurl,
    goods:'',
    mchopenid:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.mch.openid)
    var that = this;
    app.globalData.mchopenid = app.mch.openid,
    that.setData({
      mch: app.mch,
      mchopenid: app.mch.openid,
     
        })

    wx.request({
      url: app.globalData.url + 'index/goods', //仅为示例，并非真实的接口地址
      data: {
        openid: app.mch.openid,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res.data.data);


        that.setData({
          goods: res.data.data
        })

      }
    })
  },
  diancan1: function () {
    wx.navigateTo({
      url: "/pages/Menu/Menu"
    })
  },
  yuding: function () {
    wx.navigateTo({
      url: "/pages/Book/Book"
    })
  },
 tuijian: function (e) {
  
    wx.navigateTo({
      url: "/pages/CaiPinXiangQing/CaiPinXiangQing?id=" + e.currentTarget.dataset.id
    })
  },
 map: function () {
   wx.navigateTo({
     url: "/pages/Map/Map"
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