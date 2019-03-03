import Vue from 'vue'
import App from './App.vue'
import * as VueGL from 'vue-gl';

Object.keys(VueGL).forEach(name => {
  Vue.component(name, VueGL[name]);
});

Vue.config.productionTip = false;

Vue.mixin({
  props: {
    opacity: { type: Number, default: 1 },
    transparent: { type: Boolean, default: false },
    blending: { type: Number, default: 1 }
  },
  watch: {
    inst: {
      handler(inst) {
        if(inst != null && inst.opacity != null) {
          Object.assign(inst, {
            opacity: parseFloat(this.opacity),
          });
        }
        if(inst != null && inst.transparent != null) {
          Object.assign(inst, {
            transparent: this.transparent === 'true',
          });
        }
        if(inst != null && inst.blending != null) {
          Object.assign(inst, {
            blending: parseInt(this.blending)
          });
        }
      },
      immediate: true,
    },
    opacity(opacity) { if(this.inst != null && this.inst.opacity != null) this.inst.opacity = parseFloat(opacity); },
    transparent(transparent) { if(this.inst != null && this.inst.transparent != null) this.inst.transparent = transparent === 'true' },
    blending(blending) { if(this.inst != null && this.inst.blending != null) this.inst.blending =  parseInt(blending) }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
