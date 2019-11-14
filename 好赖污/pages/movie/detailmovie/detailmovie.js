// pages/movie/detailmovie/detailmovie.js
const CURRENTURL = 'https://douban.uieee.com/v2/movie/in_theaters'
const COMEURL = 'https://douban.uieee.com/v2/movie/coming_soon'
const NEWURL = 'https://douban.uieee.com/v2/movie/new_movies'
Page({

  /**
   * 页面的初始数据
   */
  data: {
   currentMovieList:[],
   movieText:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      movieText: options.movieText
    })

    var that=this
    //console.log(options)
    if(options.movieText=='正在热映'){
      wx.request({
        url: CURRENTURL,
        method: 'GET', // GET, POST, PUT, DELETE,CONNECT
        // header: {}, // 设置请求的 header
        header: {
          'content-type': 'application/text'
        },
        success(res) {
          //设置变量
          that.setData({
            currentMovieList: res.data.subjects
          })
        }
      })
    }else if(options.movieText=='即将上映'){
      wx.request({
        url: COMEURL,
        method: 'GET', // GET, POST, PUT, DELETE,CONNECT
        // header: {}, // 设置请求的 header
        header: {
          'content-type': 'application/text'
        },
        success(res) {
          //设置变量
          that.setData({
            currentMovieList: res.data.subjects
          })
        }
      })
    }else if(options.movieText=='电影新片'){
      wx.request({
        url: NEWURL,
        method: 'GET', // GET, POST, PUT, DELETE,CONNECT
        // header: {}, // 设置请求的 header
        header: {
          'content-type': 'application/text'
        },
        success(res) {
          //设置变量
          that.setData({
            currentMovieList: res.data.subjects
          })
        }
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

  }
})