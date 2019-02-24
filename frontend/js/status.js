var max = 5;
var qty = 5;

window.onload = Update;

function Update() {
  var statbool;
  var colour;
  var difference;
  var description;
  var stathead = document.getElementById('stathead');
  var statimg = document.getElementById('statimg');
  var statdesc = document.getElementById('statdesc')

  // Too few

  if (qty < max) {

    statbool = 'bad';
    colour = '#ff0040';
    difference = max - qty;
    description = difference + ' chickens are missing.';

  }

  // Too many

  else if (qty > max) {

    statbool = 'bad';
    colour = '#ff0040';
    difference = qty - max;
    description = 'The coop is above capacity by ' + difference + '.';

  }

  // Just right

  else {

    statbool = 'good';
    colour = '#00bcff';
    description = 'Everything is fine.';

  }

  // Update page content

  statimg.src = 'img/' + statbool + '.png';
  stathead.innerHTML = qty + '/' + max;
  stathead.style.color = colour;
  statdesc.innerHTML = description;

}
