//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    selectPerson: true,
    firstPerson: '保定',
    selectArea: false,
    jiantou: " v ",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    img: app.globalData.imgurl,
    movies:'',
    classname:'',
    zst:'',
    mch:'',
    tui:''
  },


  /**
    * 生命周期函数--监听页面加载
    */
  // onLoad: function (options) {
   
  // },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  clickPerson: function () {
    var that = this;
    var selectPerson = that.data.selectPerson;
    if (selectPerson == true) {
      that.setData({
        selectArea: true,
        selectPerson: false,
      })
    } else {
      that.setData({
        selectArea: false,
        selectPerson: true,
      })
    }
  },
  mySelect: function (e) {
    var that = this;
    that.setData({
      firstPerson: e.target.dataset.me,
      selectPerson: true,
      selectArea: false,
    })
  },
  powerDrawer: function (e) {

    var that = this;
    var currentStatu = e.currentTarget.dataset.statu;
    that.util(currentStatu)
  },
  onLoad: function () {
    console.log(app.globalData.openid);
//轮播图
    var that = this;
    wx.request({
      url: app.globalData.url + 'ban', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
       
       
         
          that.setData({
            movies: res.data.data,
            img: app.globalData.imgurl
          })
         
        
       // console.log(res.data.data);
      }
    })
    //分类
    wx.request({
      url: app.globalData.url + 'index/classname', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
      //  console.log(res.data.data);


        that.setData({
          classname: res.data.data
        })
        
      }
    })
//展示图
    wx.request({
      url: app.globalData.url + 'ban/zst', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        //console.log(res.data.data);


        that.setData({
          zst: res.data.data
        })

      }
    })
    wx.request({
      url: app.globalData.url + 'index/lick', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          mch: res.data.data
        })

      }
    })
 
    wx.request({
      url: app.globalData.url + 'index/tui', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          tui: res.data.data
        })

      }
    })
   
  },
  list: function (res) {
    //console.log(res.currentTarget.dataset.classid);
    wx.navigateTo({
      url: "/pages/list/list?id=" + res.currentTarget.dataset.classid
    })
  },
  list2: function (res) {
    //console.log(res.currentTarget.dataset.classid);
    wx.navigateTo({
      url: "/pages/list2/list2?id=" + res.currentTarget.dataset.classid
    })
  },
  // list3: function () {
  //   wx.navigateTo({
  //     url: "/pages/Coupon_Details/Coupon_Details"
  //   })
  // },
  list3: function (e) {
    app.mch = e.currentTarget.dataset.mch
    console.log(e)
    wx.navigateTo({
      url: "/pages/Agritainment/Agritainment?mchid=" + e.currentTarget.dataset.mchid //+ '&mch=' + e.currentTarget.dataset.mch
    })
    //console.log(e.currentTarget.dataset);
  },
  list4: function (e) {
    app.mch = e.currentTarget.dataset.mch
    wx.navigateTo({
      url: "/pages/Move_Details/Move_Details?mchid=" + e.currentTarget.dataset.mchid
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    var that = this;
    that.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
 
})

