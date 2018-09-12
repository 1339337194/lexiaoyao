// pages/list2/list2.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  mch:'',
  img: app.globalData.imgurl,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    var that = this;
    wx.request({
      url: app.globalData.url + 'index/goodslist', //仅为示例，并非真实的接口地址
      data: {
        id: options.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        //console.log(res.data.data);


        that.setData({
          mch: res.data.data
        })

      }
    })

  },
  list2: function (e) {
    app.mch = e.currentTarget.dataset.mch
    wx.navigateTo({
      url: "/pages/Agritainment/Agritainment?mchid=" + e.currentTarget.dataset.mchid //+ '&mch=' + e.currentTarget.dataset.mch
    })
    //console.log(e.currentTarget.dataset);
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