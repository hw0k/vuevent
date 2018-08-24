import { EventBus } from './event-bus'

const Vuevent = {
  install(Vue, options) {
    Vue.prototype.$vuevent = EventBus
    Vue.prototype.$vuevent.emit = Vue.prototype.$vuevent.$emit
    Vue.prototype.$vuevent.once = Vue.prototype.$vuevent.$once
    Vue.prototype.$vuevent.on = Vue.prototype.$vuevent.$on
    Vue.prototype.$vuevent.off = Vue.prototype.$vuevent.$off
  }
}

export default Vuevent