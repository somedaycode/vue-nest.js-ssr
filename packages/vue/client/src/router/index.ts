import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import TodoPage from '@/views/TodoPage.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'About',
    component: About,
  },
  {
    path: '/todo',
    name: 'TodoPage',
    component: TodoPage,
  },
];

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });

export default createRouter;
