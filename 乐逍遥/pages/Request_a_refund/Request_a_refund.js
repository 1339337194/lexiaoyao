// pages/Request_a_refund/Request_a_refund.
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  total:0,
  code:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      total: options.total,
      code: options.code
    })
  },
  formSubmit: function (e) {
    var that = this;
    console.log(e.detail.value)
    if (e.detail.value.content == '') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请填写退款原因',
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
        url: app.globalData.url + 'index/tcorder', //仅为示例，并非真实的接口地址
        data: {
          content: e.detail.value.content,
  
          code: that.data.code,
       
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"

        },
        method: "POST",
        success: function (res) {
          console.log(res.data.data);
          if(res.data.code==0){
            wx.navigateTo({
              url: "/pages/Reviewing/Reviewing?ttime=" + res.data.data.ttime + '&content=' + res.data.data.content + '&total=' + res.data.data.total
            })
          }else{
            wx.showModal({
              title: '提示',
              showCancel: false,
              content: '退款失败',
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
  tijiao: function () {
    wx.navigateTo({
      url: "/pages/Reviewing/Reviewing"
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})