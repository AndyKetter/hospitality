Page({
  data: {
    verifTime:'获取验证码'
  },
  getVerifCode: function (e) {

    var _self = this;
    var timeValue = 60;

    setInterval(function(){
      if (timeValue == 0){
        timeValue = '获取验证码';
      }
      _self.setData({
        verifTime: timeValue+"秒"
      });
      if (timeValue == '获取验证码')return;
      timeValue--;
    },1000);
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  }
})
