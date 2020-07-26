import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login';
import Main from './../views/Main';

Vue.use(VueRouter);

  const routes = [
      {path:'/',redirect:'login'},
      {path:'/login',component:Login},
      {path:'/home00',component:Main,redirect:'home',
          children:[
              {
                  path : '/home',
                  name : 'home',
                  component : () => import('@/views/Home')
              },
              {
                  path : '/page1',
                  name : '/page1',
                  component : () => import('@/views/Page1')
              },
              {
                  path : '/page2',
                  name : '/page2',
                  component : () => import('@/views/Page2')
              },
              {
                  path : '/setting',
                  name : '/setting',
                  component : () => import('@/views/Setting')
              },
              {
                  path : '/video',
                  name : '/video',
                  component : () => import('@/views/Video')
              },
              {
                  path : '/user',
                  name : '/user',
                  component : () => import('@/views/User')
              }
          ]
      },
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
