var popMax = 3;
var popNow = 0;

PopulationUpdate();

function PopulationUpdate() {
  var statBool;
  var colour;
  var difference;
  var description;
  var statHead = document.getElementById('pophead');
  var statImg = document.getElementById('popimg');
  var statDesc = document.getElementById('popdesc')

  // Too few

  if (popNow < popMax) {

    statBool = 'bad';
    colour = '#ff0040';
    difference = popMax - popNow;
    description = difference + ' unaccounted for.';

  }

  // Too many

  else if (popNow > popMax) {

    statBool = 'bad';
    colour = '#ff0040';
    difference = popNow - popMax;
    description = 'Above capacity by ' + difference + '.';

  }

  // Just right

  else {

    statBool = 'good';
    colour = '#00bcff';
    description = 'All present and correct.';

  }

  // Update page content

  statImg.src = 'img/population/' + statBool + '.png';
  statHead.innerHTML = popNow + '/' + popMax;
  statHead.style.color = colour;
  statDesc.innerHTML = description;

}
