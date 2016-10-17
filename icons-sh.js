var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
  console.log(stdout);
}
var icons = [
             // 'star', 'air-port', 'bus', 'church', 'city-hall', 'courthouse', 'covered-parking',
             // 'dumpster', 'bridge', 'fire-hydrant', 'field-house', 'golf-course', 'library', 'police-station',
             // 'recycle-center', 'railroad-crossing', 'road-back','gas-meter', 'shopping-mall',
             // 1,2,3,4,5,6,7,8,9,0,'fire-station', 'hospital', 'park', 'pool','rescue-ems',
             // 'crosswalk',
             // 'movie-theater', 'water-meter', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','gas-station',
             // 'parking', 'fooball-field', 'baseball-field', 'soccer-field', 'splash-pad', 'cell-tower', 'multi-family', 'water-tower',
             // 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'S', 'T', 'R', 'school', 'train-station','municipal-building', 'trafic-light', 'street-light',
             'vehicle-maintenance', 'electrical-meter', 'pharmacy', 'U','V', 'W', 'X', 'Y', 'Z', 'bank', 'A'
             ];

var dir = 'icons-mapright';

// exec('rm -rf '+ dir, puts);
// exec('mkdir ' + dir, puts);

icons.forEach(function(name) {
  var dir1 = dir+"/"+name+"/"+name+"-circle";
  var dir2 = dir+"/"+name+"/"+name+"-rectangle";

  var folder1= "mkdir "+dir+"/"+name;
  var folder2= "mkdir "+dir1;
  var folder3= "mkdir "+dir2;

  var move1 = "mv "+name+"-circle*.png ./"+dir1;
  var move2 = "mv "+name+"-rectangle*.png ./"+dir2;

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
