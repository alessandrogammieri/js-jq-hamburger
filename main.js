/* Creare un hamburger menu con l’utilizzo di Html,
Css e JavaScript. */

$( document ).ready(function() {
  $(".header-right > a").click(function() {
  $(".hamburger-menu").addClass("active");
});

  $(".close").click(function() {
  $(".hamburger-menu").removeClass("active");
})
});
