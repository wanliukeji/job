<template lang="html">
  <div class="model">
    <p class="p-font"><a>友情链接</a></p>
    <a class="li-div" href="http://www.jz-union.com/" target="_blank">江浙网盟</a>
    <a class="li-div" href="http://www.gusuwang.com/" target="_blank">苏州姑苏网</a>
    <a class="li-div" href="http://bbs.nantaihu.com/" target="_blank">湖州南太湖</a>
    <a class="li-div" href="http://www.5iyq.com/" target="_blank">乐清上班族</a>
    <a class="li-div" href="http://www.ph66.com" target="_blank">平湖在线</a>
    <a class="li-div" href="http://www.0575bbs.com" target="_blank">上虞论坛</a>
    <a class="li-div" href="http://www.eyuyao.com/" target="_blank">余姚生活网</a>
    <a class="li-div" href="http://bbs.nhzj.com" target="_blank">宁海在线</a>
    <a class="li-div" href="http://bbs.ksbbs.com" target="_blank">昆山论坛</a>
    <a class="li-div" href="http://www.212300.com" target="_blank">丹阳翼网</a>
    <a class="li-div" href="http://bbs.0663.net" target="_blank">星空论坛</a>
    <a class="li-div" href="http://www.hualongxiang.com/" target="_blank">化龙巷</a>
    <a class="li-div" href="http://bbs.haining.com" target="_blank">海宁论坛</a>
    <a class="li-div" href="http://bbsfh.cn" target="_blank">奉化论坛</a>
    <a class="li-div" href="http://bbs.thmz.com" target="_blank">东林书院</a>
    <a class="li-div" href="http://cs.voc.com.cn" target="_blank">长沙论坛</a>
    <a class="li-div" href="http://www.ytbbs.com" target="_blank">烟台论坛</a>
    <a class="li-div" href="http://bbs.0595bbs.cn" target="_blank">泉州论坛</a>
    <a class="li-div" href="http://bbs.0634.com" target="_blank">莱芜论坛</a>
    <a class="li-div" href="http://bbs.wenyoutai.com" target="_blank">高邮论坛</a>
    <a class="li-div" href="http://bbs.hb163.cn" target="_blank">淮北人论坛</a>
    <a class="li-div" href="http://bbs.wfits.com" target="_blank">潍坊论坛</a>
    <a class="li-div" href="http://bbs.kshot.com" target="_blank">昆山热线</a>
    <a class="li-div" href="http://go.cqmmgo.com" target="_blank">重庆论坛</a>
    <a class="li-div" href="http://www.zjoubbs.com" target="_blank">碧海潮声</a>
    <a class="li-div" href="http://bbs.233000.com" target="_blank">蚌埠论坛</a>
    <a class="li-div" href="http://bbs.cnxz.com.cn" target="_blank">徐州论坛</a>
    <a class="li-div" href="http://baa.bitauto.com" target="_blank">易车论坛</a>
    <a class="li-div" href="http://bbs.py168.com" target="_blank">番禺社区</a>
    <a class="li-div" href="http://bbs.zzz4.com/" target="_blank">株洲在线</a>
    <a class="li-div" href="http://bbs.jz.cc" target="_blank">荆州论坛</a>
    <a class="li-div" href="http://kf.yy515.com/" target="_blank">我要玩游戏</a>
  </div>
</template>

<script>
  export default {
    name: 'footerTable',
    data () {
      return {
        items: []
      }
    },
    created () {
      this.$http.get('static/data/footNav.json').then(res => {
        var obj = res.data
        this.items = obj
        if (res.status == 200) {
          // this.$notify({
          //     title: '成功连接服务器',
          //     message: '获取数据成功！',
          //     type: 'success'
          // });
          // console.log(JSON.stringify(this.items));
        } else {
          this.$notify.error({
            title: '获取数据失败',
            message: result,
            type: 'error'
          })
        }
      }).catch(function (result) {
        this.$notify.error({
          title: '获取数据失败',
          message: result,
          type: 'error'
        })
      })
    }
  }
</script>

<style scoped>
  .model {
    position: relative;
    width: 80%;
    min-width: 1200px;
    height: auto;
    vertical-align: center;
    display: block;
    padding-left: 30px;
    background: #FFFFFF;
    padding-top: 30px;
    padding-bottom: 30px;
    margin: 0 auto;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .p-font, a {
    color: #78bb09;
    font-size: 15px;
    text-align: left;
    position: relative;
    margin-bottom: 40px;
  }

  .li-div {
    color: #999;
    font-size: 14px;
    position: relative;
    text-decoration: none;
    display: inline-block;
    width: 125px;
    text-align: left;
    margin: 8px 0px 0px 0px;
  }

  .li-div:hover {
    cursor: pointer;
    color: black;
  }

  .p-font > a {
    display: inline-block;
    float: left;
    width: auto;
    height: auto;
    border-bottom: 2px #78bb09 solid;
    position: absolute;
  }

</style>
