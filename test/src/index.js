require('es6-promise').polyfill();
import Vue from 'vue';
import App from '../../src/App.vue';
import VueRainbow from 'vue-rainbow';
import './index.less';
import $ from "jquery";
Vue.use(VueRainbow);

new Vue({
  el: 'body',
  components: {
    'app': App
  },
  data:{
  	showLeastItemNum:5,
  	configData:[
  		{
  			navText:'热门酒店',
  			navValue:'hotHotel',
  			listData:[
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'热门-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'热门-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'热门-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'热门-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'热门-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'热门-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'热门-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'热门-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'热门-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'热门-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'热门-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'热门-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'热门-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'热门-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']}
  			]
  		},
  		{
  			navText:'推荐酒店',
  			navValue:'recommondHotel',
  			listData:[
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'推荐-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'推荐-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'推荐-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'推荐-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'推荐-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'推荐-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'推荐-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'推荐-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'推荐-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'推荐-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'推荐-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'推荐-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'推荐-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']},
  				{picUrl:'https://p1.meituan.net/msmerchant/204eed377ae4e2202d3f514d211ad107226998.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',power:30,name:'推荐-上海凯宾斯基婚礼会所',district:'长寿区',price:'100元／桌起',linkUrl :'http://m.dianping.com',discount:'全场限时8折优惠',tables:'10-35桌',labels:['草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼','草坪婚礼']}
  			]
  		},
  		{
  			navText:'合作商户',
  			navValue:'workHotel',
  			listData:[]
  		}
  	]
  },
  ready(){
  }
})
