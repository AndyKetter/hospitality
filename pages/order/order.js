// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    needInvoice:false
  },
  detailTap:function(){
    wx.showActionSheet({
      itemList: ['明细', '总价格￥856'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  switchChange:function(event){
    
    if (event.detail.value){
      this.setData({
        needInvoice: true
      })
    }else{
      this.setData({
        needInvoice: false
      })
    }
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
  /**
   * 用户点击快速退房按钮弹出模态框事件
   */
  noTitlemodalTap: function (e) {
    wx.showModal({
      title: "温馨提示",
      content: "尊贵的VIP，您确定要现在退房？",
      confirmText: "是",
      cancelText: "点错了"
    })
  }
})