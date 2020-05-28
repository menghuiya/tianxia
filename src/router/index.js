import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import store from '@/store';
import Cookies from 'js-cookie';

Vue.use(VueRouter);
const validate = () => {
  let userdata = Cookies.get('userData');
  if (!userdata) {
    return 0;
  } else {
    store.commit('initData', userdata);
    return 1;
  }
};
const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      keepAlive: true, // 需要缓存
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true, // 需要缓存
    },
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/User'),
    beforeEnter: (to, from, next) => {
      if (validate() == 0) {
        next('/login');
      } else {
        next();
      }
    },
  },
  {
    path: '/person/:user_id',
    name: 'person',
    component: () => import('@/views/UserPerson'),
  },
  {
    path: '/userset',
    component: () => import('@/views/UserSet'),
    beforeEnter: (to, from, next) => {
      if (validate() == 0) {
        next('/login');
      } else {
        next();
      }
    },
    children: [
      {
        path: '',
        redirect: 'setlist',
      },
      {
        path: 'setlist',
        name: 'setlist',
        component: () => import('@/components/userset/userset'),
      },
      {
        path: 'address',
        component: () => import('@/components/userset/addresslist'),
      },
      {
        path: 'addressedit',
        component: () => import('@/components/userset/addressedit'),
      },
      {
        path: 'addressadd',
        component: () => import('@/components/userset/addressadd'),
      },
      {
        path: 'about',
        component: () => import('@/components/userset/about'),
      },
      {
        path: 'info',
        component: () => import('@/components/userset/information'),
      },
      {
        path: 'balance',
        component: () => import('@/components/userset/balance/balance'),
      },
    ],
  },
  {
    path: '/gooddetail/:good_id',
    name: 'gooddetail',
    component: () => import('@/views/GoodDetal'),
    beforeEnter: (to, from, next) => {
      store.commit('getPath', from.path);
      next();
    },
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/Message'),
    beforeEnter: (to, from, next) => {
      if (validate() == 0) {
        next('/login');
      } else {
        next();
      }
    },
  },
  {
    path: '/second',
    name: 'second',
    component: () => import('@/views/SecondHand'),
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import('@/components/notice/notice'),
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('@/views/Edit'),
    beforeEnter: (to, from, next) => {
      if (validate() == 0) {
        next('/login');
      } else {
        next();
      }
    },
  },

  {
    path: '/search/:keyword',
    name: 'search',
    component: () => import('@/components/search/search'),
  },
  {
    path: '/kind/:kind_id',
    name: 'kind',
    component: () => import('@/components/kind/kind'),
  },
  {
    path: '/room/:room_id',
    name: 'room',
    component: () => import('@/components/room/room'),
  },
  {
    path: '/order/:good_id',
    name: 'order',
    component: () => import('@/components/order/order'),
  },
  {
    path: '/orderscu',
    name: 'orderscu',
    component: () => import('@/components/order/orderscu'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
    beforeEnter: (to, from, next) => {
      if (validate() == 0) {
        next();
      } else {
        next('/user');
      }
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register'),
    beforeEnter: (to, from, next) => {
      if (validate() == 0) {
        next();
      } else {
        next('/user');
      }
    },
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test'),
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
