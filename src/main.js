import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import 'vant/lib/index.css';
import VueSocketIO from 'vue-socket.io';

Vue.use(Vant);

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: 'https://www.wdf5.com:5050',
  })
);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
