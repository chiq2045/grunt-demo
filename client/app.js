const colourLoversAPI = 'http://www.colorlovers.com/api/colors'

$(document).ready(() => {
  $('#searchBtn').on('click', () => {
    let searchText = $('#searchText').value
    let searchUrl = `${colourLoversAPI}?keywords=${searchText}`
    $.get(searchUrl, (results) => {
      console.log('results: ', results)
    })
  })
})
