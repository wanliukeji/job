<template>
  <div class="model">
    <p class="model-p">当前位置:
      <span class="model-row-p-span" @click="goTo('index')">阿拉招聘</span>&nbsp;>&nbsp;<span class="model-row-p-span"
                                                                                          @click="goTo('group')">计算机/互联网/通信</span>&nbsp;>&nbsp;<span>JAVA工程师</span>
    </p>
    <div class="model-row">
      <div class="model-left">
        <img src="../../../static/image/baidu.jpg" class="model-top-img">
      </div>
      <div class="model-center">
        <p class="model-center-title">
            <span class="model-center-title-name">
              JAVA软件工程师
            </span>
        </p>
        <p class="model-center-text">
          <span>行业：计算机软件</span>
          <span>规模：1 - 49人</span>
          <span>性质：国有企业</span>
          <span>主页：<a href="itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftw">itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftw</a></span>
        </p>
        <p class="model-center-text">
          地址：江苏 苏州 东宁路553号东溪德必易园A区325室
        </p>
        <p class="model-center-bottom">
          <a class="model-center-div-btn" @click="goTo('comanyInfo')">企业首页</a>
          <a class="model-center-div-btn btn" style="color: #f2f3f5;">招聘职位</a>
        </p>
      </div>
    </div>

    <div class="model-row">
      <p style="height: 20px;"/>
      <h2 class="body-title">
        JAVA软件工程师</h2>
      <p class="body-p">
        <span>高级硬件工程师</span>
        <span>3人</span>
        <span>工业园区</span>
        <span>娄葑镇</span>
        <span>2016-06-01更新</span>
      </p>

      <p class="text-p">
        <span class="text-p-span">
          <span class="text-p-span-a">职位性质</span>
          &nbsp;
          <span class="text-p-span-name">实习</span>
        </span>

        <span class="text-p-span">
          <span class="text-p-span-a">学历要求</span>
          &nbsp;
          <span class="text-p-span-name">硕士</span>
        </span>

        <span class="text-p-span">
          <span class="text-p-span-a">工作经验</span>
          &nbsp;
          <span class="text-p-span-name">3-5年</span>
        </span>

        <span class="text-p-span">
          <span class="text-p-span-a">性别要求</span>
          &nbsp;
          <span class="text-p-span-name">限女士</span>
        </span>

        <span class="text-p-span">
          <span class="text-p-span-a">薪资范围</span>
          &nbsp;
          <span class="text-p-span-name">面议</span>
        </span>
      </p>

      <p class="body-text" style="margin-top: 20px; padding-left: 0px;">
        职位描述：
      </p>
      <p class="body-text">1.三年不间断PHP网站或APP接口开发经验,熟练使用PHP, 熟悉主流PHP框架；</p>
      <p class="body-text">2.熟悉MySQL数据库及其优化；熟练使用Redis、MangoDB数据库；</p>
      <p class="body-text">3.有良好的编码习惯, 注重代码性能及安全性;&nbsp;</p>
      <p class="body-text">4.工作认真严谨, 善于与他人沟通、合作，具有团队精神和良好的自学能力题；</p>
      <p class="body-text">5.熟悉shell/python或对mysql读写分离有实际经验者优先录用；</p>
      <p class="body-text">6.h5开发(css的bootstrap)。</p>
      <p class="body-text">7.熟悉PHP扩展开发者优先；</p>
      <p class="body-text">8.有高并发、大负载下服务端开发经验者优先。</p>
      <p class="body-text">9.有较好的团队合作精神和沟通能力，有强烈的责任心;</p>
      <p style="line-height: 65px; border-bottom: 1px #d3d3d3 solid;  border-top: 1px #d3d3d3 solid;">
        登录后显示联系方式
      </p>

      <p style="padding-top: 20px; padding-bottom: 20px;">
        <button class="job-btn btna" @click="employ">
          应聘
        </button>
        <button class="job-btn btnb" @click="collect">
          收藏
        </button>
      </p>
    </div>
    <div class="model-row">
      <h2 class="body-title">面试地址</h2>
      <p class="body-div-p">
        <input type="text" v-model="addr" class="body-input"
               placeholder="请输入地址"/>
        <button @click="searchAddr" class="body-btn">
          搜索
        </button>
      </p>
      <div id="container"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'pcJobInfo',
    data () {
      return {
        entity: {},
        addr: '宁波',
        x: '',
        y: ''
      }
    },
    mounted () {
      /**================================================= 地图初始化定位 start ============================================*/
      var geolocation = new BMap.Geolocation()
      this.x = ''
      this.y = ''
      geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point)
          map.addOverlay(mk)
          map.panTo(r.point)
          this.x = r.point.lng
          this.y = r.point.lat
        } else {
          console.log('failed' + this.getStatus())
        }
      }, {enableHighAccuracy: true})

      /**================================================= 地图初始化 start ============================================*/
      var map = new BMap.Map('container')    // 创建Map实例
      map.centerAndZoom(new BMap.Point(this.x, this.y), 11)  // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
        mapTypes: [
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]
      }))
      map.addControl(new BMap.NavigationControl())
      map.addControl(new BMap.ScaleControl())
      map.addControl(new BMap.OverviewMapControl())
      map.addControl(new BMap.MapTypeControl())
      map.setCurrentCity('宁波')          // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true)     //开启鼠标滚轮缩放
      var styleOptions = {
        strokeColor: 'red',    //边线颜色。
        fillColor: 'red',      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.8,    //边线透明度，取值范围0 - 1。
        fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。
      }
      //实例化鼠标绘制工具
      var drawingManager = new BMapLib.DrawingManager(map, {
        isOpen: false, //是否开启绘制模式
        enableDrawingTool: true, //是否显示工具栏
        drawingToolOptions: {
          anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
          offset: new BMap.Size(5, 5), //偏离值
        },
        circleOptions: styleOptions, //圆的样式
        polylineOptions: styleOptions, //线的样式
        polygonOptions: styleOptions, //多边形的样式
        rectangleOptions: styleOptions //矩形的样式
      })
      var local = new BMap.LocalSearch(map, {
        renderOptions: {map: map}
      })
      // 关键词搜索
      local.search(this.addr)
    },
    created () {
      // eslint-disable-next-line no-unused-expressions
      this.entity = this.$route.query
      console.log('>>>>>:' + JSON.stringify(this.entity))
    },
    methods: {
      goTo (name) {
        this.$router.push({name: name})
      },
      searchAddr () {
        var geolocation = new BMap.Geolocation()
        this.x = ''
        this.y = ''
        geolocation.getCurrentPosition(function (r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point)
            map.addOverlay(mk)
            map.panTo(r.point)
            this.x = r.point.lng
            this.y = r.point.lat
          } else {
            console.log('failed' + this.getStatus())
          }
        }, {enableHighAccuracy: true})

        /**================================================= 地图初始化 start ============================================*/
        var map = new BMap.Map('container')    // 创建Map实例
        map.centerAndZoom(new BMap.Point(this.x, this.y), 11)  // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
          mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]
        }))
        map.addControl(new BMap.NavigationControl())
        map.addControl(new BMap.ScaleControl())
        map.addControl(new BMap.OverviewMapControl())
        map.addControl(new BMap.MapTypeControl())
        map.setCurrentCity(this.addr)          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true)     //开启鼠标滚轮缩放
        var styleOptions = {
          strokeColor: 'red',    //边线颜色。
          fillColor: 'red',      //填充颜色。当参数为空时，圆形将没有填充效果。
          strokeWeight: 3,       //边线的宽度，以像素为单位。
          strokeOpacity: 0.8,    //边线透明度，取值范围0 - 1。
          fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
          strokeStyle: 'solid' //边线的样式，solid或dashed。
        }
        //实例化鼠标绘制工具
        var drawingManager = new BMapLib.DrawingManager(map, {
          isOpen: false, //是否开启绘制模式
          enableDrawingTool: true, //是否显示工具栏
          drawingToolOptions: {
            anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
            offset: new BMap.Size(5, 5), //偏离值
          },
          circleOptions: styleOptions, //圆的样式
          polylineOptions: styleOptions, //线的样式
          polygonOptions: styleOptions, //多边形的样式
          rectangleOptions: styleOptions //矩形的样式
        })
        var local = new BMap.LocalSearch(map, {
          renderOptions: {map: map}
        })
        // 关键词搜索
        local.search(this.addr)
      },
      employ() {
        this.$message.success('投递成功,敬请来电')
      },
      collect() {
        this.$message.success('收藏成功')
      }
    }
  }

</script>

<style scoped>
  .model {
    width: 100%;
    height: 100%;
  }

  .model-p {
    padding: 5px 0px 0px;
    color: #727272;
    position: relative;
    display: block;
    width: 80%;
    margin: 0 auto;
  }

  .model-row-p-span:hover {
    cursor: pointer;
    color: #0a6beb;
  }

  .model-row {
    width: 80%;
    height: auto;
    position: relative;
    top: 10px;
    margin: 0 auto;
    position: relative;
    padding: 0 auto;
    min-height: 230px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
    z-index: 10;
    min-width: 1200px;
    padding: 10px 20px;
    padding-bottom: 10px;
  }

  .model-left {
    position: relative;
    display: inline-block;
    float: left;
    width: 190px;
    height: 190px;
  }

  .model-top-img {
    width: 190px;
    height: 190px;
  }

  .model-center {
    width: 600px;
    height: 100%;
    min-height: 205px;
    display: inline-block;
    float: left;
    padding: 0px 25px;
  }

  .model-center-title {
    width: 100%;
    position: relative;
    height: 45px;
  }

  .model-center-title-name {
    font-size: 30px;
    color: #000000;
  }

  .model-center-text {
    font-size: 14px;
    color: #777;
    line-height: 30px;
  }

  .model-center-bottom {
    float: bottom;
    height: auto;
    margin-top: 30px;
  }

  .model-center-div-btn {
    display: block;
    float: left;
    margin-right: 5px;
    font-size: 18px;
    color: #333;
    -webkit-transition: all 0.1s;
    padding: 5px 15px;
    position: relative;
  }

  .model-center-div-btn:hover, .btn {
    background-color: #cb2027;
    color: #f2f3f5;
  }

  .body-title {
    line-height: 1;
    font-size: 18px;
    color: #333;
    text-align: left;
    padding: 10px 0px 10px 10px;
    padding-left: 0px;
    margin: 0 auto;
  }

  .body-p {
    line-height: 35px;
    width: 100%;
    border-bottom: 1px #d3d3d3 solid;
  }

  .text-p {
    line-height: 65px;
    width: 100%;
    white-space: nowrap;
    border-bottom: 1px #d3d3d3 solid;
  }

  .text-p-span {
    width: 20%;
    padding-top: 10px;
    padding-bottom: 10px;
    display: inline-block;
  }

  .text-p-span-a {
    color: #999999;
    font-size: 14px;
  }

  .text-p-span-name {
    color: #000000;
    font-size: 14px;
  }

  .body-text {
    line-height: 66px;
    font-size: 16px;
  }

  .body-div-p {
    z-index: 10;
    position: absolute;
  }

  .body-input {
    border: none;
    margin: 10px 0px 0px 70px;
    padding: 5px;
    display: inline-block;
    width: 300px;
  }

  .body-btn {
    border: none;
    margin: 10px 5px 0px 0px;
    padding: 5px;
    display: inline-block;
    background-color: #0a6beb;
    color: #f2f3f5;
    width: 70px;
    border-radius: 3px;
  }

  .job-btn {
    background-color: #0EA788;
    color: #f2f3f5;
    border: none;
    padding: 10px;
    width: 130px;
    font-size: 18px;
  }

  .btna:hover {
    background-color: #0b856c;
  }

  .btnb {
    background-color: #eeb02a;
  }

  .btnb:hover {
    background-color: #c79423;
  }

  #container {
    width: 100%;
    height: 700px;
    border: #151515 0.5px solid;
  }
</style>
