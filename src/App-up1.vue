<template lang="html">
  <div class="container-body">
    <router-view/>
  </div>
</template>
<script>
import JobNav from './components/jobNav'
import Top from './components/top'
import Search from './components/search'
import TableNav from './components/tableNav'
import MenuNav from './components/menuNav'
import FooterTable from './components/footerTable'
import footerNav from './components/footerNav'
import index from './components/index'
import AppIndex from './components/app/appIndex'
import JobList from './components/app/jobList'
import Home from './home'

export default {
  data () {
    return {
      nowTab: 1
    }
  },
  components: {
    Home,
    JobList,
    AppIndex,
    FooterTable,
    MenuNav,
    TableNav,
    Top,
    Search,
    JobNav,
    footerNav,
    index
  },
  created () {
    // 判断PC端 移动端 设备
    this.activeDate = (new Date()).toString()
    var sUserAgent = navigator.userAgent.toLowerCase()
    console.log(sUserAgent)
    var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad'
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os'
    var bIsMidp = sUserAgent.match(/midp/i) == 'midp'
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4'
    var bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb'
    var bIsAndroid = sUserAgent.match(/android/i) == 'android'
    var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce'
    var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile'
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      console.log('您的浏览设备为：移动端')
      this.$router.push({name: 'appIndex'})
    } else {
      console.log('您的浏览设备为：PC端')
      this.$router.push({name: 'home'})
    }
  },
  mounted () {

  },
  methods: {}
}
</script>

<style lang="css" scoped>
  * {
    word-break: break-word;
    margin: 0 auto;
    font-size: 16px;
    font-family: Tahoma, "Microsoft YaHei", SimSun;
  }

  html {
    max-width: 100%;
  }

  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0
  }

  body {
    /*-webkit-font-smoothing: antialiased;*/
    position: relative;
    text-align: center;
    min-height: 100%;
    /*background-color: #f2f2f2;*/
    width: 100%;
    /*min-width: 1200px;*/
  }

  .container-body {
    background-color: #F2F2F2;
    width: 100%;
    height: 100%;
    /*min-width: 1200px;*/
  }

  ul, ol {
    list-style: none
  }

  a {
    text-decoration: none;
  }

  *, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0 none
  }

  a {
    color: inherit
  }

</style>
