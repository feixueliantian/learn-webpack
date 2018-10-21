import $ from 'jquery'

function addPage (content) {
  $('.page-wrapper').empty().append(`<div class="page">${content}</div>`)
}

$('.router-link').click(function () {
  const page = $(this).attr('data-url')
  if (page === 'pageA') {
    import(/* webpackChunkName: 'pageA' */ './pageA').then(({ default: content }) => addPage(content))
  } else if (page === 'pageB') {
    import(/* webpackChunkName: 'pageB' */ './pageB').then(({ default: content }) => addPage(content))
  }
})

console.log('app')
