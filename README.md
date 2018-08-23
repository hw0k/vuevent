# vuevent
A Vue.js Plugin which helps to use EventBus easily.

## Installation
<b>CommonJS:</b>
```
$ npm i --save vuevent
```
And in your entry file:
```js
import Vue from 'vue'
import Vuevent from 'vuevent'

Vue.use(Vuevent)
```

## Usage:
This plugin binds a ```New Vue instance``` as a ```Global EventBus```.

You can use like this:
```js
// Sender Component
export default {
  methods: {
    this.$vuevent.$emit('event', 'hello world!')
  }
}

// Receiver Component
export default {
  mounted() {
    this.$vuevent.$on('event', args => {
      alert(args)
    })
  }
}
```