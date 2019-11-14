// pages/post/detail/detail.js
//引入数据源
var postData = require("../../../utils/data.js")
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: false, //默认音乐不播放
    isCollect:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //console.log(options)
    //console.log(postData.postList)
    //获取索引
    let detailId = options.id;
    //通过索引获取对象
    let detailObj = postData.postList[detailId]
    //进行设置值
    this.setData({
      detailId: detailId,
      detailObj: detailObj,
      isPlay: app.globalData.g_play[detailId],
      isCollect: wx.getStorageSync("collect")
    })
  },

  /**
   * 实现音乐的播放功能
   */
  playMusic: function() {
    let id=this.data.detailId;
    
    const backgroundAudioManager=wx.getBackgroundAudioManager()
    if (this.data.isPlay) {//音乐停止
      backgroundAudioManager.pause()
      this.setData({
        isPlay: false
      })
      //音乐暂停
      for (let i = 0; i < app.globalData.g_play.length; i++) {
        app.globalData.g_play[i] = false
      }
    } else {//音乐播放
     
      //设置对象的相关属性
      //src默认为空字符串，当设置了新的 src 时，会自动开始播放，目前支持的格式有 m4a, aac, mp3, wav。
      backgroundAudioManager.src =this.data.detailObj.music.url
      //设置音乐的标题
      backgroundAudioManager.title = this.data.detailObj.music.title
      //设置音乐的歌手
      backgroundAudioManager.singer = this.data.detailObj.music.singer
      //设置背景图
      backgroundAudioManager.coverImgUrl = this.data.detailObj.music.coverImg
      this.setData({
        isPlay: true
      })
      //音乐播放
      //音乐暂停
      for(let i=0;i<app.globalData.g_play.length;i++){
        app.globalData.g_play[i]=false
      }
      app.globalData.g_play[id]=true
      console.log(app.globalData.g_play)
    }
    var that=this
    //音乐暂停
    backgroundAudioManager.onPause(function(){
      that.setData({
        isPlay:false
      })
      app.globalData.g_play[id] = false
    })
    //音乐播放
    backgroundAudioManager.onPlay(function(){
      that.setData({
        isPlay:true
      })
      //音乐暂停
      for (let i = 0; i < app.globalData.g_play.length; i++) {
        app.globalData.g_play[i] = false
      }
      app.globalData.g_play[id] = true
    })
  },

  //收藏
  doCollect:function(){
    if(this.data.isCollect){
      this.setData({
        isCollect:false
      })
    }else{
      this.setData({
        isCollect: true
      })
    }
    wx.setStorageSync("collect", this.data.isCollect)
  },
  //分享
  doShare:function(){
    const itemList = ['分享到QQ', '分享到微博','分享到朋友圈']
    wx.showActionSheet({
      itemList: itemList,
      success(res){
        wx.showModal({
          title: itemList[res.tapIndex],
          content: '',
          success(res){
            if(res.confirm){
              wx.showToast({
                title: '分享成功',
                duration:1000
              })
            }else{
              wx.showToast({
                title: '取消分享',
                duration: 1000
              })
            }
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})