
//获取应用实例
var app = getApp()
Page({
  data: {
    brands:[{"id":16,"englishname":"Merries","chinesename":"花王","logo":"http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4%2F%E8%8A%B1%E7%8E%8B.jpg","brief":"风靡全球的尿不湿","branddesc":"","pic":"http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4%2F%E8%8A%B1%E7%8E%8B.jpg","ownedland":2,"country":null,"vid":26,"bigpic":"http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4.jpg","typeid":2,"minprice":65.0},
    {"id":17,"englishname":"Goon","chinesename":"大王","logo":"http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4%2F%E5%A4%A7%E7%8E%8B.jpg","brief":"纸尿裤的后起之秀","branddesc":"","pic":"http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4%2F%E5%A4%A7%E7%8E%8B.jpg","ownedland":2,"country":null,"vid":26,"bigpic":"http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4.jpg","typeid":2,"minprice":122.0},
    {"id":18,"englishname":"Moony","chinesename":"尤妮佳","logo":"http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4%2F%E5%B0%A4%E4%BD%B3%E5%A6%AE.jpg","brief":"无以伦比的柔软","branddesc":"","pic":"http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4%2F%E5%B0%A4%E4%BD%B3%E5%A6%AE.jpg","ownedland":2,"country":null,"vid":26,"bigpic":"http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4.jpg","typeid":2,"minprice":122.0}]
  },
  onLoad: function (options) {
    console.log(options.id)
    var that = this
  wx.showModal({
  title: '数据传输提示',
  content: '上个页面点击的品牌id='+options.id,
  success: function(res) {
    if (res.confirm) {
      console.log('用户点击确定')
    }
  }
})
    //调用应用实例的方法获取全局数据
  }
})