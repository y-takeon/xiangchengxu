// pages/post/post.js
//获取我们的数据源
var postData=require("../../utils/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //console.log(postData)
      //在微信小程序中赋值
      this.setData({
        postList: postData.postList
      })
     // console.log(this.data.postList)
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