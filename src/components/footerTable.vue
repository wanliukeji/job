<template lang="html">
  <div class="model">
    <p class="p-font"><a href="">友情链接</a></p>

    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(0,4)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(4,8)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(8,12)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(12,16)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(16,20)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(20,24)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(24,28)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(28,32)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(32,36)">{{item.name}}</li>
    </ul>
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
    this.$http.get('../../../static/data/footNav.json').then(res => {
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
    height: 200px;
    margin: 0 auto;
    margin-bottom: 10px;
    margin-top: 30px;
  }

  .p-font, a {
    color: #78bb09;
    font-size: 15px;
    text-align: left;
    position: relative;
    margin-bottom: 40px;
  }

  .ul-div {
    display: inline-block;
    float: left;
    position: relative;
    margin-right: 30px;
    min-width: 100px;
    padding-left: 2px;
    width: 11%;
    margin: 0px;
  }

  .li-div {
    /*display: inline-block;*/
    /*float: left;*/
    width: auto;
    line-height: 16px;
    color: #999;
    font-size: 14px;
    border-right: 1px #f1f1f1 solid;
    margin: 7px 10px 7px 0;
    text-align: left;
  }

  .li-div:hover {
    cursor: pointer;
    color: black;
  }

  a {
    display: inline-block;
    float: left;
    width: auto;
    height: auto;
    /*border: #0a0a0a 1px solid;*/
    border-bottom: 1px #78bb09 solid;
    position: absolute;
  }

</style>
