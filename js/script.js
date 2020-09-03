// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS

// FUNZIONI PER SCORRERE LE IMMAGINI E I PALLINI CON LE FRECCE

// FUNZIONE AVANTI
function nextImage() {

  var imgActive = $("img.active");
  var pallinoActive = $(".nav i.active")

  imgActive.removeClass("active");
  pallinoActive.removeClass("active");

  if (imgActive.hasClass("last") == true) {
    var nextImg = $("img.first");
    var nextPallino = $(".nav i.first");
  } else {
    var nextImg = imgActive.next();
    var nextPallino = pallinoActive.next();
  }

  nextImg.addClass("active");
  nextPallino.addClass("active");
}

// FUNZIONE INDIETRO
function prevImage() {

  var imgActive = $("img.active");
  var pallinoActive = $(".nav i.active");

  imgActive.removeClass("active");
  pallinoActive.removeClass("active");

  if (imgActive.hasClass("first") == true) {
    var nextImg = $("img.last");
    var nextPallino = $(".nav i.last");
  } else {
    var nextImg = imgActive.prev();
    var nextPallino = pallinoActive.prev();
  }

  nextImg.addClass("active");
  nextPallino.addClass("active");
}


$(document).ready(function() {

  // EVENTI CLICK

  // CLICK FRECCIA AVANTI
  $(".next").click(
    function() {
      nextImage();
    }
  );

  // CLICK FRECCIA INDIETRO
  $(".prev").click(
    function() {
      prevImage();
    }
  );

  // CLICK PALLINI
  $(".nav i").click(
    function () {
      var imgActive = $("img.active");
      var pallinoActive = $(".nav i.active");

      imgActive.removeClass("active");
      pallinoActive.removeClass("active");

      var index = $(this).index();
      console.log(index);

      var nextImg = $(".images img").eq(index);
      var nextPallino = $(this);

      nextImg.addClass("active");
      nextPallino.addClass("active");
    }
  );

  // EVENTI PRESS
  $(document).keydown(
    function (event) {
      if (event.which == 39) {
        nextImage();

      } else if (event.which == 37) {
        prevImage();
      }
    }
  );

});
