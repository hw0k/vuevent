import { EventBus } from './event-bus'

const Vuevent = {
  install(Vue, options) {
    Vue.prototype.$vuevent = EventBus
  }
}

export default Vuevent