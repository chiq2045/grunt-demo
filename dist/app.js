(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const ColorService = require('./services/color-service.js');

$(document).ready(() => {
  $('#searchBtn').on('click', () => {
    let searchText = $('#searchText').val();

    ColorService.searchColors(searchText)
      .then(results => {
        const paletteTemplate = $('#paletteTemplate');
        const paletteHtml = paletteTemplate.html().trim();
        const output = $('#output');

        results.forEach(palette => {
          let $palette = $(paletteHtml);

          let $paletteImage = $palette.find('.palette-image');
          let $paletteName = $palette.find('.palette-name');
          let $paletteAuthor = $palette.find('.palette-author');

          $paletteImage.attr('src', palette.imageUrl);
          $paletteName.text(palette.title);
          $paletteAuthor.text(palette.userName);

          output.append($palette);
        });
      })
      .catch(err => {
        alert('things went awry');
        console.error('failed: ', err);
      });
    // let searchUrl = `${colourLoversAPI}?keywords=${searchText}&jsonCallback=?`;
    //
    // $.getJSON(searchUrl, results => {
    //   const paletteTemplate = $('#paletteTemplate');
    //   const paletteHtml = paletteTemplate.html().trim();
    //   const output = $('#output');
    //
    //   results.forEach(palette => {
    //     let $palette = $(paletteHtml);
    //
    //     let $paletteImage = $palette.find('.palette-image');
    //     let $paletteName = $palette.find('.palette-name');
    //     let $paletteAuthor = $palette.find('.palette-author');
    //
    //     $paletteImage.attr('src', palette.imageUrl);
    //     $paletteName.text(palette.title);
    //     $paletteAuthor.text(palette.userName);
    //
    //     output.append($palette);
    //   });
    // });
  });
});

},{"./services/color-service.js":2}],2:[function(require,module,exports){
const colourLoversAPI = '//www.colourlovers.com/api/colors';

module.exports = {
  getColors: getColors,
  searchColors: searchColors,
};

function getColors() {}

function searchColors(query, filters) {
  let queryParams = [];
  for (let key in filters) {
    queryParams.push(`${key}=${filters[key]}`);
  }

  queryParams.push(`keywords=${query}`);
  queryParams.push('jsonCallback=?');
  let searchUrl = `${colourLoversAPI}?${queryParams.join('&')}`;

  return new Promise((resolve, reject) => {
    $.getJSON(searchUrl, resolve).fail((jqxhr, textStatus, error) => {
      reject(error);
    });
  });
}

},{}]},{},[1]);
