/* eslint-disable */
import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

const eventBus = new Vue();
export default { eventBus };

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
/* eslint-enable */
