// components/search-component/search-component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onBindConfirm: function (event){
      //console.log(event)
      var that=this
      wx.request({
        url: "https://douban.uieee.com/v2/movie/search?q=" + event.detail.value+"&start=0&count=10",
        method: 'GET', // GET, POST, PUT, DELETE,CONNECT
        // header: {}, // 设置请求的 header
        header: {
          'content-type': 'application/text'
        },
        success(res) {
          //console.log(res)
          that.triggerEvent("myevent",res.data.musics)
        }
      })
    }
  }
})
