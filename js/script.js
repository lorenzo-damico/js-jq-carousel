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

$(document).ready(function() {

  // 1. Imposto un evento click sulla freccia destra per scorrere in avanti.
  $(".next").click(
    function() {

      // 2. Per prima cosa definisco l'immagine che possiede la classe active attualmente.
      var imgActive = $("img.active");

      // 3. Rimuovo la classe dall'immagine affinchè scompaia.
      imgActive.removeClass("active");

      // 4. Definisco l'immagine successiva.
      //    Se è l'ultima immagine, ovvero ha classe last, reimposto la prima immagine.
      //    Altrimenti imposto tramite la funzione next().
      if (imgActive.hasClass("last") == true) {
        var nextImg = $("img.first");
      } else {
        var nextImg = imgActive.next();
      }

      // 5. Aggiungo la classe active all'immagine successiva.
      nextImg.addClass("active");
    }
  );

  // 6. Eseguo una analoga funzione per la freccia sinistra cambiando solo alcuni valori.
  $(".prev").click(
    function() {

      // 2. Per prima cosa definisco l'immagine che possiede la classe active attualmente.
      var imgActive = $("img.active");

      // 3. Rimuovo la classe dall'immagine affinchè scompaia.
      imgActive.removeClass("active");

      // 4. Definisco l'immagine pecedente.
      //    Se è la prima immagine, ovvero ha classe first, reimposto l'ultima immagine.
      //    Altrimenti imposto tramite la funzione prev().
      if (imgActive.hasClass("first") == true) {
        var nextImg = $("img.last");
      } else {
        var nextImg = imgActive.prev();
      }

      // 5. Aggiungo la classe active all'immagine precedente.
      nextImg.addClass("active");
    }
  );

});
