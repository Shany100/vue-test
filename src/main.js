require('insert-css')(require('./app.css'))

var Vue = require('vue')

new Vue({
  el: '#keepApp',
  components: {
    a: require('./component-a'),
    product: require('./component-product')
  },
  // require html enabled by the partialify transform
  template: require('./app.html'),
  data: {
    title: 'Hello Browserify & Vue.js!'
  }
})