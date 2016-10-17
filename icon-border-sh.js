var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
  console.log(stdout);
}

var icons = ['star', 'air-port', 'fire-hydrant', 'fire-station', 'rescue-ems',
              'water-tower', 'soccer-field', 'baseball-field', 'fooball-field',
              'street-light', 'trafic-light'];

var dir = 'icons-mapright';

// exec('rm -rf '+ dir, puts);
// exec('mkdir ' + dir, puts);

icons.forEach(function(name) {
  var dir1 = dir+"/"+name+"/"+name+"-circle-border";
  var dir2 = dir+"/"+name+"/"+name+"-rectangle-border";

  var folder1= "mkdir "+dir+"/"+name;
  var folder2= "mkdir "+dir1;
  var folder3= "mkdir "+dir2;

  var move1 = "mv "+name+"-circle-border*.png ./"+dir1;
  var move2 = "mv "+name+"-rectangle-border*.png ./"+dir2;

  var rm = "rm "+name+"*";

  exec(folder1, puts);
  exec(folder2, puts);
  exec(folder3, puts);
  exec(move1, puts);
  exec(move2, puts);
  exec(rm, puts);

});

exec('rm circle-*.png', puts);
exec('rm round-rectangle-*.png', puts);

