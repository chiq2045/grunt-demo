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
