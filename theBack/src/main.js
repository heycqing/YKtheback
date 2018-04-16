// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { Table,TableColumn,Tabs,TabPane,Button}from 'element-ui';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
// import VueAxios from 'vue-axios'


Vue.config.productionTip = false;
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(Tabs)
// Vue.use(TabPane)
// Vue.use(VueAxios);
Vue.use(axios)
Vue.use(ElementUI)
Vue.prototype.$http= axios;




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
