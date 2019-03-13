import Vue from 'vue'
import App from './App.vue'
import * as VueGL from 'vue-gl';
import VueGlExtensions from './mixins/vuegl-extensions';

Object.keys(VueGL).forEach(name => {
  Vue.component(name, VueGL[name]);
});

Vue.config.productionTip = false;

Vue.mixin(VueGlExtensions);

new Vue({
  render: h => h(App)
}).$mount('#app')