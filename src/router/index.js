import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'main',
  },
  {
    path: '/main',
    component: () => import('@/views/Main'),
    children: [
      {
        path: '/',
        component: () => import('@/views/Home/Home'),
        children: [
          {
            path: '',
            redirect: '/channel/frontend'
          },
          {
            path: '/channel/:id',
            component: () => import('@/views/Home/ChannelList'),
          },
        ],
      },
      {
        path: '/article/:id',
        component: () => import('@/views/ArticleInfo/ArticleInfo')
      },
    ],
  },
  {
    path: '/write',
    component: () => import('@/views/Write/TheWrite')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
