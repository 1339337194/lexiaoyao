// pages/Book/Book.js
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
  yuding: function () {
    wx.navigateTo({
      url: "/pages/Menu/Menu"
    })
  },
  formSubmit: function (e) {
    var that = this;
    console.log(e.detail.value)
   
    if (e.detail.value.rq == '') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请填写日期',
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
    if (e.detail.value.rs == '') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请填写人数',
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
    if (e.detail.value.lxr == '') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请填写联系人',
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
    if (e.detail.value.lxdh == '') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请填写联系电话',
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
    if (e.detail.value.bz == '') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请填写备注',
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
      url: app.globalData.url + 'index/yd', //仅为示例，并非真实的接口地址
      data: {
        rq: e.detail.value.rq,
        rs: e.detail.value.rs,
        lxr: e.detail.value.lxr,
        lxdh: e.detail.value.lxdh,
        bz: e.detail.value.bz,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"

      },
      method: "POST",
      success: function (res) {
        console.log(res.data.data);
        wx.navigateTo({
          url: "/pages/Menu/Menu?orid=" + res.data.data
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