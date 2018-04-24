// pages/checkout/checkout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btn:true,
    btnText:'快速退房',
    msgText:'您正在入住中，我们可以帮您',
    bill:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var status = 2;
    if (status == 0){
      this.setData({
        btn: true,
        btnText: '快速退房',
        msgText: '您正在入住中，我们可以帮您',
        bill: false
      })
    } else if (status == 1){
      this.setData({
        btn:false,
        msgText:"酒店管家正在为您核查房间，请耐心等待几分钟哟",
        bill: false
      })
    } else if (status == 2) {
      this.setData({
        btn: true,
        btnText: '确认账单',
        msgText: "确认账单，退换押金",
        bill: true
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