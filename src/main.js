import Vue from 'vue';
import {store} from './store';
import VueRouter from 'vue-router';
import App from './App';
import {ComputedAndUpdates} from './components/ComputedAndUpdates';
import AddToData from './components/AddToData';
import {UseFunctionalGetters} from './components/UseFunctionalGetters';
import {TransitionAndDestroy} from './components/TransitionAndDestroy';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {path: '/ComputedAndUpdates', component: ComputedAndUpdates},
  {path: '/AddToData', component: AddToData},
  {path: '/UseFunctionalGetters', component: UseFunctionalGetters},
  {path: '/TransitionAndDestroy', component: TransitionAndDestroy}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
