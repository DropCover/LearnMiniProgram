App({

  /**小程序会在后台存活俩小时
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("小程序初始化完成：onLaunch")
    //异步调用
    // wx.getUserInfo({
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

    setTimeout(function(){
      const err = new Error();

      throw err
    },3000)
  },

  /**
   * 小程序界面显示出来之后会执行的生命周期函数
   */
  onShow: function (options) {
    console.log("小程序界面显示出来之后会执行：onShow")
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("小程序界面被隐藏会执行：onHide")
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("小程序中发生一些错误")    
  }
})
