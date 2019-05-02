const colourLoversAPI = "http://www.colourlovers.com/api/colors";

$(document).ready(() => {
  $("#searchBtn").on("click", () => {
    let searchText = $("#searchText").val();
    let searchUrl = `${colourLoversAPI}?keywords=${searchText}&jsonCallback=?`;

    $.getJSON(searchUrl, results => {
      const paletteTemplate = $("#paletteTemplate");
      const paletteHtml = paletteTemplate.html().trim();
      const output = $("#output");

      results.forEach(palette => {
        let $palette = $(paletteHtml);

        let $paletteImage = $palette.find(".palette-image");
        let $paletteName = $palette.find(".palette-name");
        let $paletteAuthor = $palette.find(".palette-author");

        $paletteImage.attr("src", palette.imageUrl);
        $paletteName.text(palette.title);
        $paletteAuthor.text(palette.userName);

        output.append($palette);
      });
    });
  });
});
