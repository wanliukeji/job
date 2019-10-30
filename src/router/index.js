import Vue from 'vue'
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
import index from '../components/index'
import group from '../components/job/group'
import info from '../components/job/info'
import pcJobInfo from '../components/job/pcJobInfo'

import appIndex from '../components/app/appIndex'
import jobList from '../components/app/jobList'
import companyList from '../components/app/companyList'
import resList from '../components/app/resList'
import companyGroup from '../components/job/companyGroup'
import compayInfo from '../components/app/compayInfo'
import jobInfo from '../components/app/jobInfo'

Vue.use(Router)

export default new Router({
  /* 进行路由配置，规定“/”引入到组件 */
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/appIndex',
      name: 'appIndex',
      component: appIndex
    },
    {
      path: '/jobList',
      name: 'jobList',
      component: jobList
    },
    {
      path: '/companyList',
      name: 'companyList',
      component: companyList
    },
    {
      path: '/resList',
      name: 'resList',
      component: resList
    },
    {
      path: '/companyGroup',
      name: 'companyGroup',
      component: companyGroup
    },
    {
      path: '/jobInfo',
      name: 'jobInfo',
      component: jobInfo
    },
    {
      path: '/compayInfo',
      name: 'compayInfo',
      component: compayInfo
    },
    {
      path: '/jobInfo',
      name: 'jobInfo',
      component: jobInfo
    },
    {
      path: '/pcJobInfo',
      name: 'pcJobInfo',
      component: pcJobInfo
    }
  ]
})
