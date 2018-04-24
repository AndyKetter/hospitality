// pages/roomOrder/roomOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [
      { type: 3,
        superTitle:"英威诺酒店",
        title:'酒店酒店',
        time:"2015-12-12 至 2015-12-14晚",
        bedType:'高级大床房',
        breakfast:'双早',
        msg:"你还需支付押金￥300"
      } //type:0等待刷身份证， 1 支付押金 2确认账单，3 快速退房
    ],
    popData: {
      type: 1, //0普通弹窗， 1 温馨提示
      isShow: false,
      title: '',
      subTitle: '',
      icon: '',
      leftBtn: '',
      rightBtn: '',
    },
    currentOperationIndex:0,
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
   * 点击  1 支付押金 2确认账单，3 快速退房 按钮
   */
  clickNodeBtn: function (e) {
    var index = e.target.dataset.index;
    var objType = this.data.data[index].type;
    
    this.setData({
      currentOperationIndex:index
    });

    if (objType == 1) { //支付押金
      this.payDeposit(this.data.data[index]);
    } else if (objType == 2) {
      this.confirmBill(this.data.data[index]);
    } else if (objType == 3) {
      this.unsubscribe(this.data.data[index]);
    }
  },
  /**
   * 支付押金
   */
  payDeposit: function (obj) {
    var popData = {};
    popData.type = 0;
    popData.isShow = true;
    popData.title = "支付成功";
    popData.subTitle = "亲爱的，赶紧去酒店前台刷身份证，拿房卡吧！";
    popData.icon = '../../images/zhifuchenggong.png';
    popData.leftBtn = "知道了";
    this.setData({
      popData: popData
    });
  },
  /**
   * 确认订单
   */
  confirmBill: function (obj) {
    var popData = {};
    popData.type = 1;
    popData.isShow = true;
    popData.title = "";
    popData.subTitle = "";
    popData.icon = '';
    popData.leftBtn = "知道了";
    this.setData({
      popData: popData
    });
  },
  /**
   * 退房
   */
  unsubscribe: function (obj) {
    var popData = {};
    popData.type = 1;
    popData.isShow = true;
    popData.title = "温馨提示";
    popData.subTitle = "尊贵的VIP，您确定要现在退房吗？";
    popData.icon = '../../images/wenxitishi.png';
    popData.leftBtn = "点错了";
    popData.rightBtn = "是";
    this.setData({
      popData: popData
    }); 
  },
  /**
   * 用户点击知道了
   */
  zhidaoleBack:function(){
    var obj = this.data.data[this.data.currentOperationIndex];
    if (obj){
      var objType = obj.type;
      if (objType == 1) {   //支付押金
          //支付结束之后，在此修改数据就行了。
        obj.type = 0;
        obj.msg = '亲爱的，赶紧去酒店前台刷身份证，拿房卡吧！';
        var data = this.data.data;
        data[this.data.currentOperationIndex] = obj;
        var arr = new Array().concat(data);
        this.setData({
          data: arr,
          popData: {
            isShow: false
          }          
        });
      } else if (objType == 2) {
        // 2确认账单， 之后在此修改数据
      } else if (objType == 3) {
        // 3 快速退房，之后在此修改数据
      }
    }

  },
  hiddBack: function () {
    this.setData({
      popData: {
        isShow: false
      }
    });
  }
})