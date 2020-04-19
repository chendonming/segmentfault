import Vue from 'vue/dist/vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import EventMix from '@/common/event-mix';
import App from './App.vue';
import router from './router';
import '@/style/reset.css';
import '@/assets/iconfont/iconfont.css';
import '@/style/global.css';

Vue.use(ElementUI);
Vue.mixin(EventMix);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
