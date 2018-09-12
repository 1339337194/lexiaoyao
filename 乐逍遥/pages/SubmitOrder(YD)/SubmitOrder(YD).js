// pages/SubmitOrder(YD)/SubmitOrder(YD).js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      goods:[],
      total:0,
      orders:'',
      orid:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      goods: JSON.parse(options.car),
      total: options.total,
      orders: options.car,
      orid: options.orid,
    })
  },
  // tijiao: function () {
  //   wx.navigateTo({
  //     url: "/pages/PaySuccess(YD)/PaySuccess(YD)"
  //   })
  // },
  formSubmit: function (e) {
    var that = this;
    console.log(e.detail.value)
    console.log(that.data.total)
    console.log(that.data.goods)
    if (e.detail.value.name == '') {
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
    if (e.detail.value.phone == '') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请填写联系方式',
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
    if(that.data.orid==0){
//点餐
      wx.request({
        url: app.globalData.url + 'index/order', //仅为示例，并非真实的接口地址
        data: {
          name: e.detail.value.name,
          phone: e.detail.value.phone,
          content: e.detail.value.content,
          orders: that.data.orders,
          total: that.data.total,
          openid: app.globalData.openid,
          mchopenid: app.globalData.mchopenid,
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"

        },
        method: "POST",
        success: function (res) {
          console.log(res.data.data);
          wx.navigateTo({
            url: "/pages/PaySuccess(YD)/PaySuccess(YD)?total=" + res.data.data
          })
        }
      })
    }else{
      //预定
      wx.request({
        url: app.globalData.url + 'index/ydorder', //仅为示例，并非真实的接口地址
        data: {
          name: e.detail.value.name,
          phone: e.detail.value.phone,
          content: e.detail.value.content,
          orders: that.data.orders,
          total: that.data.total,
          openid: app.globalData.openid,
          mchopenid: app.globalData.mchopenid,
          orid: that.data.orid,
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"

        },
        method: "POST",
        success: function (res) {
          console.log(res.data.data);
          wx.navigateTo({
            url: "/pages/PaySuccess(YD)/PaySuccess(YD)?total=" + res.data.data
          })
        }
      })
    }


  },
})