// # # GENERATE FOLDER
// # # node icons.js

// # echo 'Start Move Image'
// # rm -rf icons-rectangles
// # mkdir icons-rectangles

// # mkdir icons-rectangles/trafic-flow
// # mv trafic-flow-rectangle*.png ./icons-rectangles/trafic-flow

// # mkdir icons-rectangles/one-way-right
// # mv one-way-right-rectangle*.png ./icons-rectangles/one-way-right

// # mkdir icons-rectangles/one-way-left
// # mv one-way-left-rectangle*.png ./icons-rectangles/one-way-left

// # mkdir icons-rectangles/water-meter
// # mv water-meter-rectangle*.png ./icons-rectangles/water-meter

// # mkdir icons-rectangles/electrical-meter
// # mv electrical-meter-rectangle*.png ./icons-rectangles/electrical-meter

// # mkdir icons-rectangles/gas-meter
// # mv gas-meter-rectangle*.png ./icons-rectangles/gas-meter

// # mkdir icons-rectangles/vehicle-maintenance
// # mv vehicle-maintenance-rectangle*.png ./icons-rectangles/vehicle-maintenance

// # mkdir icons-rectangles/multi-family
// # mv multi-family-rectangle*.png ./icons-rectangles/multi-family

// # mkdir icons-rectangles/bridge
// # mv bridge-rectangle*.png ./icons-rectangles/bridge

// # rm round-rectangle-*.png
// # rm trafic-flow*.png one-way-right*.png one-way-left*.png water-meter*.png
// # rm electrical-meter*.png gas-meter*.png vehicle-maintenance*.png multi-family*.png bridge*.png
// # echo 'End Move Image'



var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
  console.log(stdout);
}
var icons = ['trafic-flow', 'one-way-right', 'one-way-left',
             'water-meter', 'electrical-meter', 'gas-meter', 'vehicle-maintenance',
             'multi-family', 'bridge'];

var dir = 'icons-mapright';

// exec('rm -rf '+ dir, puts);
// exec('mkdir ' + dir, puts);

icons.forEach(function(name) {
  var dir2 = dir+"/"+name+"/"+name+"-rectangle-long";

  var folder1= "mkdir "+dir+"/"+name;
  var folder3= "mkdir "+dir2;

  var move2 = "mv "+name+"-rectangle*.png ./"+dir2;

  var rm = "rm "+name+"*";

  exec(folder1, puts);
  exec(folder3, puts);
  exec(move2, puts);
  exec(rm, puts);

});

exec('rm round-rectangle-*.png *-small*.png', puts);
