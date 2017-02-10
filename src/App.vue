
<template>
  <div class="wed-banquet-nav-scroll" id="topAnchor">
      <a href="#topAnchor" class="gotoTop" style="display: none;">
          <img src="./img/gotoTop.png">
      </a>
      <div v-show="true" class="banquet-tab-box">
          <ul class="banquet-tab" :class="{'fixed-top':isFixed}">
              <li v-for="(index, item) in navData">
                  <a class="{{index == headerTabIndex ? 'active': ''}}" :href="item.goto">
                      <span class="top">{{item.navText}}</span>
                  </a>
              </li>

          </ul>
      </div>
      <div class="banquet-list-box">
        <div id="banquet-limit-list{{index}}" v-for="(index,item) in navData" class="banquet-limit-list">
             <h2 class="title">
                <em id="banquet-limit{{index}}"></em>
                <span>{{item.navText}}</span>
            </h2>
            <div v-if="item.listData&&item.listData.length">
                <div class="item-name" :class='{"hide":index>=itemFirstNum}' v-for="(index,ele) in item.listData">{{ele.name}}</div>
                <div v-if="item.listData&&item.listData.length>itemFirstNum" class="show-more" @click="showMore($event)">
                    查看更多
                </div>
            </div>
            <div class="no-data" v-else>
                暂无数据
            </div>

        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFixed:false,
      headerTabIndex:0
    }
  },
  props:['config','showLeastItemNum'],
  components:{
    
  },
  computed: {
    navData:function(){
      this.config.forEach(function(item,index){
          item.goto = "#banquet-limit"+index;
      });
      return this.config;
    },
    itemFirstNum:function(){
      return this.showLeastItemNum?this.showLeastItemNum:3
    }
  },
  ready(){
    this.initTabScroll();

  },
  methods: {
      //滚动
      initTabScroll(){
          let self = this;
          window.onscroll=function(){
              var gotoTop = document.querySelector(".gotoTop"),
                  tabBox = document.querySelector(".banquet-tab-box");

              var part = [];
              for(var i in self.navData){
                var idTag = "banquet-limit-list"+i;
                part.push(document.getElementById(idTag))
              }
              var partTop = [];
              for(var j in self.navData){
                partTop.push(part[j].offsetTop);
              }

              var offsetTop = tabBox.offsetTop,
                  winScrollTop = window.scrollY;
              if(winScrollTop >= offsetTop){
                  self.$set('isFixed', true);
              }else{
                  self.$set('isFixed', false);
              }

              for(var k = self.navData.length-1;k>=0;k--){
                 if(winScrollTop>partTop[k]-100){
                    self.headerTabIndex = k;
                    break;
                 } else {
                    continue;
                 }
              }

              if(winScrollTop>200){
                  gotoTop.style.display = "block";
              }else{
                  gotoTop.style.display = "none";
              }
          };
      },
      showMore:function(event){
          var currTarget = event.target,
              lis = currTarget.parentNode.getElementsByClassName("item-name");
          currTarget.style.display = "none";
          for(var i=0,len=lis.length; i<len; i++){
              lis[i].style.display = "block";
          }
      }
  }
}
</script>

<style lang="less" scoped>
  @import url('./less/border.less');
  body{
    margin: 0;
}

a{
  text-decoration: none;
}
  ul{
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  .hide{
    display: none;
  }
  .show-more{
    position: relative;
    display: block;
    margin-top: -1px;
    font-size: 14px;
    color: #333;
    line-height: 40px;
    text-align: center;
    background-color: #fff;
    background: #fff url(//www.dpfile.com/mod/app-baby-h5/0.5.30/src/img/line_b.png) top left repeat-x;
    background-size: 1px auto;
    // .borderline(#e1e1e1,bottom);
    &:after{
          content: "";
          display: inline-block;
          margin-left: 6px;
          width: 10px;
          height: 10px;
          border: 1px solid #cac9c9;
          border-color: transparent #cac9c9 #cac9c9 transparent;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          vertical-align: 3px;
    }
  }
  .top-banner{
    line-height: 30px;
  }

  .gotoTop {
      position: fixed;
      z-index: 300;
      bottom: 10px;
      right: 10px;
      width: 61px;
      height: 61px;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
  }
  .fixed-top{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index:3;
  }
  .banquet-tab-box{
    height: 48px;
    position: relative;
    z-index: 2;
  }
  .banquet-tab{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      li{
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          text-align: center;
          a{
                position: relative;
                display: block;
                height: 48px;
                color: #cb341d;
                font-size: 15px;
                font-weight: 900;
                background-color: #f7d4aa;
                text-align: center;
                .top{
                  display: block;
                  width: 100%;
                  line-height: 48px;
                }

                &.active{
                  color: #f6eddf;
                  background-color: #cb341d;
                  &:after{
                      content: "";
                      position: absolute;
                      width: 0;
                      height: 0;
                      border: 6px solid transparent;
                      border-color: #cb341d transparent transparent transparent;
                      bottom: -12px;
                      left: 50%;
                      margin-left: -6px;
                  }
                }
          }
      }
  }
  .banquet-limit-list{
    position: relative;
    background-color: white;
    .title{
      padding: 7px 0;
      em{
          position: absolute;
          width: 100%;
          height: 48px;
          top: -47px;
          left: 0;
          z-index: -1;
      }
      span{
            text-align: center;
            display: block;
            margin: 0 auto;
            color: #f7d4aa;
            height: 50px;
            line-height: 50px;
      }
    }
  }

  .no-data{
      text-align: center;
      font-size: 12px;
      margin-bottom: 17px;
  }

  .item-name{
    line-height: 40px;
  }

</style>
