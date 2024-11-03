$(document).ready(function () {
  $("#filtro").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#campanhaContainer .col-md-4").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
