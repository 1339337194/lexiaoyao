// pages/Exchange/Exchange.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  queding: function () {
    wx.navigateTo({
      url: "/pages/Exchange_Success/Exchange_Success"
    })
  },
  formSubmit: function (e) {
    console.log(e.detail.value)
    if (e.detail.value.code == '') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请填写兑换码',
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
      url: app.globalData.url + 'index/getcode', //仅为示例，并非真实的接口地址
      data: {
        openid: app.globalData.openid,
        code: e.detail.value.code,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res.data);

        if (res.data.code == 0) {
          wx.navigateTo({
            url: "/pages/Exchange_Success/Exchange_Success"
          })
        }else{
          wx.showModal({
            title: '提示',
            showCancel: false,
            content: '兑换码错误',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
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