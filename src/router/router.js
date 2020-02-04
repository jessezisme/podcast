/**
 *
 * Vue Routing:
 * the main router file, which imports all of the routes as separate modules;
 * set on vue instance with Vue.use()
 *
 */
import Vue from 'vue/dist/vue.esm.js';
import VueRouter from 'vue-router';
// set vue to use router
Vue.use(VueRouter);
// import routes
import RouteHome from './router-home';
import RoutePodcast from './router-podcast';
// create router and apply routes
const routes = [RouteHome, RoutePodcast];
const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

export default router;