// pages/Merchant_Classification/Merchant_Classification.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsclass: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.url + 'index/getgoodclass', //仅为示例，并非真实的接口地址
      data: {
        openid: app.globalData.openid,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res.data.data);
       if(res.data.code==0){
         that.setData({
           goodsclass: res.data.data
         })
       }
        

      }
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
            url: app.globalData.url + 'index/delclass', //仅为示例，并非真实的接口地址
            data: {
            
              openid: app.globalData.openid,
              goodsclass: ress.currentTarget.dataset.goodsclass
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

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  edus: function (ress) {
    console.log(ress.currentTarget.dataset.goodsclass)
    wx.navigateTo({
      url: "/pages/EduCategory/EduCategory?goodsclass="+ress.currentTarget.dataset.goodsclass
    })
  },
  tianjia: function () {
    wx.navigateTo({
      url: "/pages/AddCategory/AddCategory"
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