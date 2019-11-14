
// components/star/star.js
const LENGTH = 5
const CLS_ON = 'on'
const CLS_OFF = 'off'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    result: []
  },
  attached: function () {
    //console.log(this)
    let result = []
    //获取评分
    let score = Math.floor(this.data.score) / 2
    //全部是星星
    let hasON = Math.floor(score)
    //全星星的
    for (let i = 0; i < hasON; i++) {
      result.push(CLS_ON)
    }
    while (result.length < LENGTH) {
      result.push(CLS_OFF)
    }
    this.setData({
      result: result
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
