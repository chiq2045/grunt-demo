const colourLoversAPI = 'http://www.colorlovers.com/api/colors'

$(document).ready(() => {
  $('#searchBtn').on('click', () => {
    let searchText = $('#searchText').value
    let searchUrl = `${colourLoversAPI}?keywords=${searchText}&jsonCallback=?`
    $.get(searchUrl, results => {
      console.log('results: ', results)
      const paletteTemplate = $('#palleteTemplate')
      const output = $('#output')

      results.foreach(palette => {
        console.log('cloning')
        output.append(paletteTemplate.html().trim())
      })
    })
  })
})
