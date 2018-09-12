// pages/My_Merchant_ProductInformation/My_Merchant_ProductInformation.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: '',
    img: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.url + 'index/getgoods', //仅为示例，并非真实的接口地址
      data: {
        openid: app.globalData.openid,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res.data.data);
        if (res.data.code == 0) {
          that.setData({
            goods: res.data.data,
            img: app.globalData.imgurl
          })
        }


      }
    })
  },
  tianjia: function () {
    wx.navigateTo({
      url: "/pages/UploadProduct/UploadProduct"
    })
  },
  list: function (ress) {
    wx.showModal({
      title: '提示',
      showCancel: true,
      content: '您确定要删除吗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          console.log(ress.currentTarget.dataset.goodsclass)
          wx.request({
            url: app.globalData.url + 'index/delgoods', //仅为示例，并非真实的接口地址
            data: {

              //openid: app.globalData.openid,
              id: ress.currentTarget.dataset.id
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function (res) {
              console.log(res.data);

              if (res.data.code == 0) {
                wx.redirectTo({
                  url: "/pages/My_Merchant_ProductInformation/My_Merchant_ProductInformation"
                })
              }
            }
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
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