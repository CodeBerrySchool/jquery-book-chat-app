//ez csak tesztkód, arra szolgál, hogy ellenőrizzük, sikerült-e összekötni a Javascriptet és a jQueryt a HTML-el, a végleges verzióban nem lesz benne
//az oldalsó menüben van egy kép és két gomb, a megfelelő gombra klikkeléskor eltűnik a kép

$(document).ready(function(){

    $("#hide").on('click', function() {
        $('img').hide();
    });

});

//Feladatok:
//összekötni a jQuery-t és Javascriptet a HTML-el
//[ ] type in a new message that appears in the chat window if I press the "send" button
//[ ] type in a new message that appears in the chat window if I press the "return" key


//chat input tartalma - klikk - jelenjen meg a chat message area után (val)

//először csak működjön a gomb, klikkelésre - ezt teszteltem azzal, hogy a Send gombra klikkeléskor egy előre megadott üzenetet jelenített meg ablakban a böngésző

// a logika a következő: klikkelésre az üzenet mezőben lévő szöveget jelenítse meg a legutolsó üzenet után
//használt methodok: click, keypress, val, after


 //click event+paraméter nélküli függvény
  //változóként deklaráltam az input mező tartalmát, hogy újrafelhasználható legyen.


$(document).ready(function(){
    $('#sending').on('click', function() {   
      var message = $('input').val();
      //alert(message);
      $('#user').after(message);
      });
                 
});

//a feladat második részének logikája hasonló, csak ott nem klikkelésre, hanem az Enter leütésére fog megtörténni a bevitt üzenet megjelenítése


$(document).ready(function(){
  $('input').keypress(function(e) {            //keypress event a click helyett+1 paraméteres függvény
      if (e.which == 13) {                     //13: az enter char kódja; ha az entert leütjük, végrehajtódik az utasítás, ami ez után jön
      $('#user').after(message);               //a message korábban már deklarálva lett, így csak meg kell hívni
      return false;  
    };
  });
});


//A bevitt üzenet megjelenik, de nem marad meg. Egyelőre ennyire jutottam.