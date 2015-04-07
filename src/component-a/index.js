require('insert-css')(require('./style.css'))

module.exports = {
  template: require('./template.html'),
  replace: true,
  data: function () {
    return {
      msg: 'I am component A!',
      event: "寻找靠谱的前端模板"
    }
  }
}