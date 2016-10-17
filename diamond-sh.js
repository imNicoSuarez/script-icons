// # #!/usr/bin/env bash

// # # GENERATE FOLDER

// # echo 'Start Move Image'
// # rm -rf icon-diamond
// # mkdir icon-diamond

// # mkdir icon-diamond/right-turn
// # mv right-turn-diamond*.png ./icon-diamond/right-turn
// # rm right-turn-*.png

// # mkdir icon-diamond/left-turn
// # mv left-turn-diamond*.png ./icon-diamond/left-turn
// # rm left-turn-*.png

// # mkdir icon-diamond/two-way-traffic
// # mv two-way-traffic-diamond*.png ./icon-diamond/two-way-traffic
// # rm two-way-traffic-*.png

// # rm *-diamond-*.png
// # echo 'End Move Image'


var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
  console.log(stdout);
}
var icons = ['right-turn', 'left-turn', 'two-way-traffic'];

var dir = 'icons-mapright';

// exec('rm -rf '+ dir, puts);
// exec('mkdir ' + dir, puts);

icons.forEach(function(name) {
  var dir2 = dir+"/"+name+"/"+name+"-diamond";

  var folder1= "mkdir "+dir+"/"+name;
  var folder3= "mkdir "+dir2;

  var move2 = "mv "+name+"-diamond*.png ./"+dir2;

  // var rm = "rm "+name+"*";

  exec(folder1, puts);
  exec(folder3, puts);
  exec(move2, puts);
  // exec(rm, puts);

});

exec('rm round-diamond-*.png', puts);