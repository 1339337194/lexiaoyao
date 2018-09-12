// pages/AddCategory/AddCategory.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  queding: function () {
    wx.redirectTo({
      url: "/pages/Merchant_Classification/Merchant_Classification"
    })
  },


  formSubmit: function (e) {
    var that = this;
    console.log(e.detail.value)
    if (e.detail.value.name == '') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请填写分类',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return
    }

    wx.request({
      url: app.globalData.url + 'index/addgclass', //仅为示例，并非真实的接口地址
      data: {
        name: e.detail.value.name,
        openid: app.globalData.openid,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res.data);

        if (res.data.code == 0) {
          wx.redirectTo({
            url: "/pages/Merchant_Classification/Merchant_Classification"
          })
        }
      }
    })

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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