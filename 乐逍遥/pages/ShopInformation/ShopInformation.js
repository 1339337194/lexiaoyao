// pages/ShopInformation/ShopInformation.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:'',
    index: 0,
    address:'',
    classname:'',
    name:'',
    content:'',
    user:'',
    ohone:'',
    imgurl:'',
    phone:'',
    evalList: [{ tempFilePaths: [], imgList: [] }],
    imgsss: app.globalData.imgurl
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //分类
    var that = this;
    wx.request({
      url: app.globalData.url + 'index/classnames', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
          console.log(res.data.data);
        console.log(app.globalData.openid)
        that.setData({
           array: res.data.data
        })

      }
    })

    wx.request({
      url: app.globalData.url + 'index/getmch', //仅为示例，并非真实的接口地址
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
          address: res.data.data.address ,
          //classname: res.data.data.classname,
          index: res.data.data.class_id,
          name: res.data.data.name,
          content: res.data.data.content,
          user: res.data.data.user,
          imgurl: res.data.data.url,
          phone: res.data.data.phone,
        
          
        })

      }
    })
  },
 baocun: function (e) {
   //console.log(e)
    // wx.redirectTo({
    //   url: "/pages/My_Merchant/My_Merchant"
    // })
  },
  formSubmit: function (e) {
    console.log(e.detail.value)
    if(e.detail.value.address==''){
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请填写地址',
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
    if (e.detail.value.name == '') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请填写店铺名称',
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
    if (e.detail.value.user == '') {
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
    if (e.detail.value.url == '') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请上传门店图',
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
      url: app.globalData.url + 'index/addmch', //仅为示例，并非真实的接口地址
      data: {
        address: e.detail.value.address,
        openid:app.globalData.openid,
        classname: e.detail.value.classname,
        content: e.detail.value.content,
        user: e.detail.value.user,
        phone: e.detail.value.phone,
        url: e.detail.value.url,
        name: e.detail.value.name,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res.data);
       
        if(res.data.code==0){
           wx.redirectTo({
      url: "/pages/My_Merchant/My_Merchant"
    })
        }
      }
    })

  },

 /**
  * 监听普通picker选择器
  */
 listenerPickerSelected: function (e) {
   
   //改变index值，通过setData()方法重绘界面
   this.setData({
     index: e.detail.value
   });
 },
  //添加图片
  joinPicture: function (e) {
    var index = e.currentTarget.dataset.index;
    var evalList = this.data.evalList;
    var that = this;
    var imgNumber = evalList[index].tempFilePaths;
    if (imgNumber.length >= 1) {
      wx.showModal({
        title: '',
        content: '最多上传一张图片',
        showCancel: false,
      })
      return;
    }
    wx.showActionSheet({
      itemList: ["从相册中选择", "拍照"],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage("album", imgNumber);
          } else if (res.tapIndex == 1) {
            that.chooseWxImage("camera", imgNumber);
          }
        }
      }
    })
  },
  chooseWxImage: function (type, list) {
    var img = list;
    var len = img.length;
    var that = this;
    var evalList = this.data.evalList;
    wx.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: [type],
      success: function (res) {
        var addImg = res.tempFilePaths;
        var addLen = addImg.length;
        if ((len + addLen) > 1) {
          for (var i = 0; i < (addLen - len); i++) {
            var str = {};
            str.pic = addImg[i];
            img.push(str);
          }
        } else {
          for (var j = 0; j < addLen; j++) {
            var str = {};
            str.pic = addImg[j];
            img.push(str);
          }
        }
        that.setData({
          evalList: evalList
        })
        that.upLoadImg(img);
      },
    })
  },
  upLoadImg: function (list) {
    var that = this;
    this.upload(that, list);
  },
  //多张图片上传
  upload: function (page, path) {
    var that = this;
    var curImgList = [];
    for (var i = 0; i < path.length; i++) {
      wx.showToast({
        icon: "loading",
        title: "正在上传"
      }),
        wx.uploadFile({
          url: app.globalData.url + 'index/mchimg',//接口处理在下面有写
          filePath: path[i].pic,
          name: 'file',
          header: { "Content-Type": "multipart/form-data" },
          formData: {
            //douploadpic: '1'
            
          },
          success: function (res) {
            console.log(res.data)
            curImgList.push(res.data);
            var evalList = that.data.evalList;
            evalList[0].imgList = curImgList;
            that.setData({
              evalList: evalList,
              imgurl: res.data
            })
            if (res.statusCode != 200) {
              wx.showModal({
                title: '提示',
                content: '上传失败',
                showCancel: false
              })
              return;
            }
            var data = res.data
            page.setData({  //上传成功修改显示头像
              src: path[0]
            })
          },
          fail: function (e) {
            wx.showModal({
              title: '提示',
              content: '上传失败',
              showCancel: false
            })
          },
          complete: function () {
            wx.hideToast();  //隐藏Toast
          }
        })
    }
  },
  //删除图片
  clearImg: function (e) {
    var index = e.currentTarget.dataset.index;
    var evalList = this.data.evalList;
    var img = evalList[0].tempFilePaths;
    img.splice(index, 1);
    this.setData({
      evalList: evalList,
      imgurl: ''
    })
    this.upLoadImg(img);
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