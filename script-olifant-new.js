//bron voor randomitem cycle: https://css-tricks.com/snippets/javascript/select-random-item-array/
//bron voor vorige en volgende functie:https://stackoverflow.com/questions/19838206/how-to-make-javascript-object-disappear-when-click-on-rest-of-page
// 2:https://www.youtube.com/watch?v=uAAD3mmQGRQ
// 3: https://stackoverflow.com/questions/54248347/how-to-find-previous-or-next-element-from-array-in-javascript


//hulp om van 6 functies 2 functies te maken: didier catz door het aan een string te koppelen ipv aan verschillende arrays (zie koe)
//audio javascript bron: https://www.youtube.com/watch?v=p4OHVJxd2FI
// Classlist bron: https://www.youtube.com/watch?v=t8Nzhgyj1rI


//console log om te laten zien dat dit script is verbonden aan het bestand index_olifant.html
console.log('script-olifant-new.js is verbonden aan index_olifant.html');

// variabele 0 gaat gebruikt worden voor de loop
var i = 0;

//submit button
var submitButton = document.querySelector('#submit');
//buttons links
var haarButtonLinks = document.getElementById('hoofdlinks');
var shirtButtonLinks = document.getElementById('shirtlinks');
var broekButtonLinks = document.getElementById('broeklinks');

//buttons rechts
var haarButtonRechts = document.getElementById('hoofdrechts');
var shirtButtonRechts = document.getElementById('shirtrechts');
var broekButtonRechts = document.getElementById('broekrechts');

//buttons onder
var speakerButton = document.getElementById('speaker');
var randomButton = document.getElementById('random');
var chickenButton = document.getElementById('chicken');

//Arrays van afbeeldingen, om de afbeeldingen op een rijtje te zetten en te categoriseren. we hebben 3 arrays (categorieën) hoofd,shirt en broek.
var hoofdArray = ["images/hoofd-0.png", "images/hoofd-1.png", "images/hoofd-3.png"];
var shirtArray = ["images/shirt-0.png", "images/shirt-1.png", "images/shirt-3.png"];
var broekArray = ["images/broek-0.png", "images/broek-1.png", "images/broek-3.png"];

// grote array
var poppetjeArray = [
  ["images/hoofd-0.png", // [0] 1
    "images/hoofd-1.png", // [1] 2
    "images/hoofd-2.png" // [2] 3
  ],

  ["images/shirt-0.png",
    "images/shirt-1.png",
    "images/shirt-2.png"
  ],

  [" images/broek-0.png",
    " images/broek-1.png",
    " images/broek-2.png"
  ]
];



//functie vorige afbeelding, volgende afbeelding
// function volgendeAfbeelding  heeft de parameter ITEM, item werkt als een soort placeholder, op het moment dat de functie wordt opgeroepen wordt item vervangen voor de bijbehorende array aan afbeeldingen bijv. hoofd
function volgendeAfbeelding(item) {
  if (i >= 2) // als i groter of gelijk aan 2 is (3e item in de array)
    i = -1; //dan als hij de laatste item bereikt, gaat item weer naar 0
  i++; // dan wordt i met 1 verhoogd
  document.getElementById(item).src = 'images/' + (item) + '-' + [i] + '.png'; //deze string haalt een image uit de folder, item is een placeholder text/parameter
  console.log('volgende' + ' ' + item);
};

function vorigeAfbeelding(item) {
  if (i <= 0) // als i kleiner of gelijk aan 0 is
    i = 3; // i 
  i--; //als i aan het einde van de array is dan gaat hij weer naar het begin
  document.getElementById(item).src = 'images/' + (item) + '-' + [i] + '.png'; //deze string haalt een image uit de folder, item is een placeholder text/parameter
  console.log('vorige' + ' ' + item);
};
//functie chicken

//functie random
//moet ervoor zorgen dat je een random afbeelding bij elke array krijgt, maar hij pakt nu alleen random array in een array dus random nummer 1,2,3
function random() {

  var randomItem = Math.floor(Math.random() * poppetjeArray.length) // hij pakt een random item uit poppetjearray

  document.querySelector("#hoofd").src = poppetjeArray[0][randomItem]; // aan hoofd wordt de array gekoppeld deze functie pakt uit [0] een [randomitem]
  document.querySelector("#shirt").src = poppetjeArray[1][randomItem];
  document.querySelector("#broek").src = poppetjeArray[2][randomItem];
  console.log(randomItem)
};

//functie speaker + var audio
function speaker() {
  var audio = new Audio('audio/audio-0.mp3');

  audio.play()
  // als audio-1.png is bereikt gaat hij weer naar audio-0.png 
  console.log('audio wordt afgespeeld')
};

//functie alles weghalen +kip te voor schijn laten halen
function poof() {

  document.querySelector('#hoofd').classList.add('hidden'); // images krijgen de class .hidden
  document.querySelector('#shirt').classList.add('hidden');
  document.querySelector('#broek').classList.add('hidden');

  document.querySelector('#kip').classList.remove('hidden'); //images haalt de class.hidden weg
  console.log('pop is weg + kip is hier')

};

//eventlisteners buttons rechts
//de button wordt gekoppeld aan de functie volgendeAfbeelding en opgeroepen
haarButtonRechts.addEventListener('click', function () {
  volgendeAfbeelding('hoofd')
});
shirtButtonRechts.addEventListener('click', function () {
  volgendeAfbeelding('shirt')
});
broekButtonRechts.addEventListener('click', function () {
  volgendeAfbeelding('broek')
});

//eventlisteners buttons links
haarButtonLinks.addEventListener('click', function () {
  vorigeAfbeelding('hoofd')
});
shirtButtonLinks.addEventListener('click', function () {
  vorigeAfbeelding('shirt')
});
broekButtonLinks.addEventListener('click', function () {
  vorigeAfbeelding('broek')
});

//random button
randomButton.addEventListener('click', function () {
  random()
});
//speaker button
speakerButton.addEventListener('click', function () {
  speaker()
});

// kip button
chickenButton.addEventListener('click', function () {
  poof()
});