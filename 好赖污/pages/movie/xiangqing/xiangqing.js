// pages/movie/xiangqing/xiangqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   currentMovie:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    //console.log(options.movieid)
     wx.request({
       url: 'https://douban.uieee.com/v2/movie/subject/'+options.movieid,
       method:"get",
       header: {
         'content-type': 'application/text'
       },
       success(res){
         console.log(res.data)
         that.setData({
           currentMovie: res.data
         })
       }
     })
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