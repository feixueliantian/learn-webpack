import $ from 'jquery'
import sum from './vendor/sum'
const minus = require('./vendor/minus')

console.log(`sum(3, 2) = ${sum(3, 2)}`)
console.log(`minus(3, 2) = ${minus(3, 2)}`)

$.get(
  '/comments/hotflow',
  {
    id: '4263554020904293',
    mid: '4263554020904293',
    max_id_type: '0'
  },
  function(data) {
    console.log(data)
  }
)

if (module.hot) {
  module.hot.accept('./vendor/sum', function () {
    console.log('sum.js is changed')
  })
}
