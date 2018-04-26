// pages/reserveHotel/reserveHotel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/hotel-list-1.png',
      '/images/hotel-list-2.png',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    showPriceList:false,
    actionText:"收起",
    rotateName:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  onTap:function(){
    this.setData({
      showPriceList: this.data.showPriceList == false ? true:false,
      actionText: this.data.actionText == "收起" ? "展开":"收起",
      rotateName: this.data.showPriceList == false ? "rotate" : ""
    });
  }
})