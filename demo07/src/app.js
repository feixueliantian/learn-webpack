import './scss/base.scss'
import './scss/common.scss'
document.addEventListener('click', function () {
  import(/* webpackChunkName: 'foo' */ './foo')
})
console.log('hello world')
