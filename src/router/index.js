import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './../views/Main';

Vue.use(VueRouter);

  const routes = [
      {path:'/',component:Main,
          children:[
              {
                  path : '/',
                  name : '/',
                  component : () => import('@/views/home/Home')
              },
              {
                  path : '/page1',
                  name : '/page1',
                  component : () => import('@/views/other/Page1')
              },
              {
                  path : '/page2',
                  name : '/page2',
                  component : () => import('@/views/other/Page2')
              },
              {
                  path : '/setting',
                  name : '/setting',
                  component : () => import('@/views/other/Setting')
              },
              {
                  path : '/video',
                  name : '/video',
                  component : () => import('@/views/video/Video')
              },
              {
                  path : '/user',
                  name : '/user',
                  component : () => import('@/views/user/User')
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
