// pages/Order/Order.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['点餐', '预订', '兑换'],
    navbar2: ['未兑换', '已兑换', '退款'],
    currentTab2: 0,
    currentTab: 0,
    order:'',
    ydorder: '',
    worder:'',
    yorder:'',
    torder:'',
    img: app.globalData.imgurl
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  navbarTap2: function (e) {
    this.setData({
      currentTab2: e.currentTarget.dataset.idx
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.url + 'index/getorder', //仅为示例，并非真实的接口地址
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
//预定
    wx.request({
      url: app.globalData.url + 'index/getydorder', //仅为示例，并非真实的接口地址
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
          ydorder: res.data.data
        })

      }
    })

//未兑换
    wx.request({
      url: app.globalData.url + 'index/worder', //仅为示例，并非真实的接口地址
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
          worder: res.data.data
        })

      }
    })
    //已兑换
    wx.request({
      url: app.globalData.url + 'index/yorder', //仅为示例，并非真实的接口地址
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
          yorder: res.data.data
        })

      }
    })
    //退款
    wx.request({
      url: app.globalData.url + 'index/torder', //仅为示例，并非真实的接口地址
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
          torder: res.data.data
        })

      }
    })
  },
  diancan: function (e) {
    console.log(e)
    if (e.target.dataset.a=='a'){

      wx.showModal({
        title: '提示',
        showCancel: true,
        content: '您确定要删除吗',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.request({
              url: app.globalData.url + 'index/delorder', //仅为示例，并非真实的接口地址
              data: {
                code: e.currentTarget.dataset.code
              },
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              method: "POST",
              success: function (res) {
                wx.switchTab({
                  url: "/pages/Order/Order"
                })

              }
            })

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })

    }else{
      wx.navigateTo({
        url: "/pages/Order_Details/Order_Details?code=" + e.currentTarget.dataset.code + '&url=' + e.currentTarget.dataset.url + '&name=' + e.currentTarget.dataset.name
      })
    }

  },
  
  weiduihuan: function (e) {
    wx.navigateTo({
      url: "/pages/NotRedeemed/NotRedeemed?code=" + e.currentTarget.dataset.code + '&url=' + e.currentTarget.dataset.url + '&name=' + e.currentTarget.dataset.name
    })
  },
  yiduihuan: function (e) {

    if (e.target.dataset.a == 'a') {

      wx.showModal({
        title: '提示',
        showCancel: true,
        content: '您确定要删除吗',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.request({
              url: app.globalData.url + 'index/delcorder', //仅为示例，并非真实的接口地址
              data: {
                code: e.currentTarget.dataset.code
              },
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              method: "POST",
              success: function (res) {
                wx.switchTab({
                  url: "/pages/Order/Order"
                })

              }
            })

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })

    } else {
      wx.navigateTo({
        url: "/pages/Redeemed_Details/Redeemed_Details?code=" + e.currentTarget.dataset.code + '&url=' + e.currentTarget.dataset.url + '&name=' + e.currentTarget.dataset.name
      })
    }

  },
  yituikuan: function (e) {
    console.log(e)
    if (e.target.dataset.a == 'a') {

      wx.showModal({
        title: '提示',
        showCancel: true,
        content: '您确定要删除吗',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.request({
              url: app.globalData.url + 'index/delcorder', //仅为示例，并非真实的接口地址
              data: {
                code: e.currentTarget.dataset.code
              },
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              method: "POST",
              success: function (res) {
                wx.switchTab({
                  url: "/pages/Order/Order"
                })

              }
            })

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })

    } else {
      wx.navigateTo({
        url: "/pages/Refunded/Refunded?code=" + e.currentTarget.dataset.code + '&url=' + e.currentTarget.dataset.url + '&name=' + e.currentTarget.dataset.name
      })
    }
  
  },
  shenhezhong: function (e) {
    wx.navigateTo({
      url: "/pages/Refunding_Details/Refunding_Details?code=" + e.currentTarget.dataset.code + '&url=' + e.currentTarget.dataset.url + '&name=' + e.currentTarget.dataset.name
    })
  },
  tuikuanshibai: function (e) {

    console.log(e)
    if (e.target.dataset.a == 'a') {

      wx.showModal({
        title: '提示',
        showCancel: true,
        content: '您确定要删除吗',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.request({
              url: app.globalData.url + 'index/delcorder', //仅为示例，并非真实的接口地址
              data: {
                code: e.currentTarget.dataset.code
              },
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              method: "POST",
              success: function (res) {
                wx.switchTab({
                  url: "/pages/Order/Order"
                })

              }
            })

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })

    } else {
      wx.navigateTo({
        url: "/pages/RefundFailed_Details/RefundFailed_Details?code=" + e.currentTarget.dataset.code + '&url=' + e.currentTarget.dataset.url + '&name=' + e.currentTarget.dataset.name
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