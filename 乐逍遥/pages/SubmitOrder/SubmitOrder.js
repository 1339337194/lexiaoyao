// pages/SubmitOrder/SubmitOrder.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    // 使用data数据对象设置样式名  
    minusStatus: 'disabled',
    good: '',
    img: app.globalData.imgurl,
  },
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.id)
    wx.request({
      url: app.globalData.url + 'index/good', //仅为示例，并非真实的接口地址
      data: {
        id: options.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res.data.data);


        that.setData({
          good: res.data.data
        })

      }
    })
  }, 
  tijiao: function () {
    wx.navigateTo({
      url: "/pages/PaySuccess/PaySuccess"
    })
  },
  formSubmit: function (e) {
    var that = this;
    console.log(e.detail.value)
    console.log(that.data.num)
    console.log(that.data.good.id)
    console.log(that.data.good.price * that.data.num)
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
      wx.request({
        url: app.globalData.url + 'index/corder', //仅为示例，并非真实的接口地址
        data: {
          name: e.detail.value.name,
          phone: e.detail.value.phone,
          url: that.data.good.url,
          total: that.data.good.price * that.data.num,
          openid: app.globalData.openid,
          mchopenid: that.data.good.openid,
          g_name: that.data.good.name,
          g_id: that.data.good.id,
          num: that.data.num,
          price: that.data.good.price
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"

        },
        method: "POST",
        success: function (res) {
          console.log(res.data.data);
          wx.navigateTo({
            url: "/pages/PaySuccess/PaySuccess?total=" + res.data.data.total + '&code=' + res.data.data.code + '&g_name=' + res.data.data.g_name
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