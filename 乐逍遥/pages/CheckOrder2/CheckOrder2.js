// pages/Order/Order.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['未完成', '已完成'],
    currentTab: 0,
    img: app.globalData.imgurl,
    order: '',
    wcorder:''
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.url + 'index/getmorder', //仅为示例，并非真实的接口地址
      data: {
        openid: app.globalData.openid,
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
    wx.request({
      url: app.globalData.url + 'index/getmtorder', //仅为示例，并非真实的接口地址
      data: {
        openid: app.globalData.openid,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          wcorder: res.data.data
        })

      }
    })
  },
  diancan: function (e) {
    console.log(e)
    if (e.target.dataset.a == 'a') {

      wx.showModal({
        title: '提示',
        showCancel: true,
        content: '您确定要完成',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.request({
              url: app.globalData.url + 'index/wcorder', //仅为示例，并非真实的接口地址
              data: {
                code: e.currentTarget.dataset.code
              },
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              method: "POST",
              success: function (res) {
                wx.switchTab({
                  url: "/pages/CheckOrder2/CheckOrder2"
                })

              }
            })

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })

    } else if (e.target.dataset.a == 'b'){

      wx.showModal({
        title: '提示',
        showCancel: true,
        content: '您确定要删除吗',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.request({
              url: app.globalData.url + 'index/delmorder', //仅为示例，并非真实的接口地址
              data: {
                code: e.currentTarget.dataset.code
              },
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              method: "POST",
              success: function (res) {
             

              }
            })

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })

    } else {
      wx.navigateTo({
        url: "/pages/Order_Details/Order_Details?code=" + e.currentTarget.dataset.code + '&url=' + e.currentTarget.dataset.url + '&name=' + e.currentTarget.dataset.name
      })
    }

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