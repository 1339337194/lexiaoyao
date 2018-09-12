const app = getApp()
Page({
  data: {
    goods: [
      // {
      //   "name": "热销",
      //   "type": -1,
      //   "foods": [
      //     {
      //       "name": "茄子腊味煲仔饭",
      //       "price": 10,
      //       "Count": 0,
      //       "icon": "/img/p40.jpg",
      //     },
      //   ]
      // },
      // {
      //   "name": "折扣",
      //   "type": 2,
      //   "foods": [
      //     {
      //       "name": "茄子腊味煲仔饭",
      //       "price": 60.5,
      //       "Count": 0,
      //       "icon": "/img/p40.jpg",
      //     },
      //     {
      //       "name": "茄子腊味煲仔饭",
      //       "price": 60.5,
      //       "Count": 0,
      //       "icon": "/img/p40.jpg",
      //     }
      //   ]
      // },
    ],
    toView: '0',
    scrollTop: 100,
    foodCounts: 0,
    totalPrice: 0,// 总价格
    totalCount: 0, // 总商品数
    carArray: [],
    minPrice: 15,//起送價格
    payDesc: '',
    fold: true,
    selectFoods: [{ price: 20, count: 2 }],
    cartShow: 'none',
    status: 0,
    url: "",
    showPopup: false,
    orid:0
  },
  selectMenu: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    this.setData({
      toView: 'order' + index.toString()
    })
    console.log(this.data.toView);
  },
  //移除商品
  decreaseCart: function (e) {
    var goodsid = e.currentTarget.dataset.id;
    var icon = e.currentTarget.dataset.img;
    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    this.data.goods[parentIndex].foods[index].Count--
    var name = this.data.goods[parentIndex].foods[index].name;
    var num = this.data.goods[parentIndex].foods[index].Count;
    var mark = 'a' + index + 'b' + parentIndex
    var price = this.data.goods[parentIndex].foods[index].price;
    var obj = { icon:icon,goodsid: goodsid,price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
    var carArray1 = this.data.carArray.filter(item => item.mark != mark);
    carArray1.push(obj);
    console.log(carArray1);
    for (var m = 0; m < carArray1.length; m++) {
      if (carArray1[m].num == 0) {
        carArray1.splice(m, 1);  // splice(a,b); a需要删除的位置,b删除几个
      }
    }
    this.setData({
      carArray: carArray1,
      goods: this.data.goods
    })
    this.calTotalPrice()
    this.setData({
      payDesc: this.payDesc(),
    })
    //关闭弹起
    var count1 = 0
    for (let i = 0; i < carArray1.length; i++) {
      if (carArray1[i].num == 0) {
        count1++;
      }
    }
    //console.log(count1)
    if (count1 == carArray1.length) {
      if (num == 0) {
        this.setData({
          cartShow: 'none'
        })
      }
    }
  },
  decreaseShopCart: function (e) {
    console.log('1');
    this.decreaseCart(e);
  },
  //添加到购物车
  addCart(e) {
    //console.log(e.currentTarget.dataset);
    var goodsid = e.currentTarget.dataset.id;
    var icon = e.currentTarget.dataset.img;
    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    this.data.goods[parentIndex].foods[index].Count++;
    var mark = 'a' + index + 'b' + parentIndex
    var price = this.data.goods[parentIndex].foods[index].price;
    var num = this.data.goods[parentIndex].foods[index].Count;
    var name = this.data.goods[parentIndex].foods[index].name;
    var obj = { icon: icon,goodsid: goodsid,price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
    var carArray1 = this.data.carArray.filter(item => item.mark != mark)
    carArray1.push(obj)
    console.log(carArray1);
    this.setData({
      carArray: carArray1,
      goods: this.data.goods
    })
    this.calTotalPrice();
    this.setData({
      payDesc: this.payDesc()
    })
  },
  addShopCart: function (e) {
    this.addCart(e);
  },
  //计算总价
  calTotalPrice: function () {
    var carArray = this.data.carArray;
    var totalPrice = 0;
    var totalCount = 0;
    for (var i = 0; i < carArray.length; i++) {
      totalPrice += carArray[i].price * carArray[i].num;
      totalCount += carArray[i].num
    }
    this.setData({
      totalPrice: totalPrice,
      totalCount: totalCount,
      //payDesc: this.payDesc()
    });
  },
  //差几元起送
  payDesc() {
    if (this.data.totalPrice === 0) {
      return `请选择`;
    } else if (this.data.totalPrice < this.data.minPrice) {
      let diff = this.data.minPrice - this.data.totalPrice;
      return '选好了';
    } else {
      return '选好了';
    }
  },

  //购物车
  toggleList: function () {
    if (!this.data.totalCount) {
      return;
    }
    this.setData({
      fold: !this.data.fold,
    })
    var fold = this.data.fold
    //console.log(this.data.fold);
    this.cartShow(fold)
  },
  cartShow: function (fold) {
    console.log(fold);
    if (fold == false) {
      this.setData({
        cartShow: 'block',
      })
    } else {
      this.setData({
        cartShow: 'none',
      })
    }
    console.log(this.data.cartShow);
  },
  /**   
  * 预览图片  
  */
  togglePopup: function (event) {
    var image_path = event.currentTarget.dataset.id;
    this.setData({
      url: image_path,
      showPopup: !this.data.showPopup
    });
  },

  tabChange: function (e) {
    var showtype = e.target.dataset.type;
    this.setData({
      status: showtype,
    });
  },

  onLoad: function (options) {
    if (options.orid){
      var orid = options.orid
    }else{
      var orid =0
    }
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      payDesc: this.payDesc(),
      orid: orid
    });
    var that = this;
    wx.request({
      url: app.globalData.url + 'index/goodlist', //仅为示例，并非真实的接口地址
      data: {
        openid: app.globalData.mchopenid,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res.data.data);


        that.setData({
          goods: res.data.data
        })

      }
    })

  },
  onReady: function () {
    // 页面渲染完成
  },
  xiangqing: function (e) {
    wx.navigateTo({
      url: "/pages/CaiPinXiangQing/CaiPinXiangQing?id="+ e.currentTarget.dataset.id
    })
  },
  xuanhaole: function () {
    console.log(this.data.orid)
    // console.log(this.data.carArray);
    // console.log(this.data.totalPrice);
    var car = JSON.stringify(this.data.carArray);
    console.log(car);
    wx.navigateTo({
      url: "/pages/SubmitOrder(YD)/SubmitOrder(YD)?total=" + this.data.totalPrice + '&car=' + car + '&orid=' + this.data.orid
    })
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
