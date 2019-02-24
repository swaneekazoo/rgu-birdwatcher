var thermoMax = 20;
var thermoMin = 10
var thermoNow = 15;

TemperatureUpdate();

function TemperatureUpdate() {
  var statBool;
  var colour;
  var difference;
  var description;
  var statHead = document.getElementById('thermohead');
  var statImg = document.getElementById('thermoimg');
  var statDesc = document.getElementById('thermodesc')

  // Too hot

  if (thermoNow > thermoMax) {

    statBool = 'bad';
    colour = '#ff0040';
    difference = thermoNow - thermoMax;
    description = difference + ' degrees too high.';

  }

  // Too cold

  else if (thermoNow < thermoMin) {

    statBool = 'bad';
    colour = '#ff0040';
    difference = thermoMin - thermoNow;
    description = difference + ' degrees too low.';

  }

  // Just right

  else {

    statBool = 'good';
    colour = '#00bcff';
    description = 'Just right.';

  }

  // Update page content

  statImg.src = 'img/temperature/' + statBool + '.png';
  statHead.innerHTML = thermoNow;
  statHead.style.color = colour;
  statDesc.innerHTML = description;

}
