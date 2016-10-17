// #!/usr/bin/env bash

// # GENERATE FOLDER

// echo 'Start Move Image'
// rm -rf icon-stop
// mkdir icon-stop


// mv stop*.png ./icon-stop/

// rm stop-*.png
// rm custom-*.png
// echo 'End Move Image


var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
  console.log(stdout);
}
var icons = ['stop'];

var dir = 'icons-mapright';

// exec('rm -rf '+ dir, puts);
// exec('mkdir ' + dir, puts);

icons.forEach(function(name) {
  var dir2 = dir+"/"+name+"/"+name+"-custom";

  var folder1= "mkdir "+dir+"/"+name;
  var folder3= "mkdir "+dir2;

  var move2 = "mv "+name+"-custom*.png ./"+dir2;

  var rm = "rm "+name+"*.png";

  exec(folder1, puts);
  exec(folder3, puts);
  exec(move2, puts);
  exec(rm, puts);

});

exec('rm custom-*.png', puts);