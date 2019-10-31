<template lang="html">
  <div class="container-body">
    <!--    -->
    <top/>
    <search/>
    <menu-nav/>
    <table-nav/>
    <router-view/>
    <footer-table/>
    <footer-nav/>
    <!--     <app-index/>-->
    <!--     <job-list/>-->
  </div>
</template>
<script>

import Top from './components/top'
import MenuNav from './components/menuNav'
import TableNav from './components/tableNav'
import FooterTable from './components/footerTable'
import FootNav from './components/footerNav'
export default {
  name: 'Home',
  components: {FooterTable, TableNav, MenuNav, Top, FootNav},
  data () {
    return {
      nowTab: 1
    }
  },
  created () {
    this.$router.push({name: 'index'})
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
