'use strict';

var im = require('simple-imagemagick');

var colors = require('./config.json').colors;

// var icons = ['barn' , 'dump', 'gate', 'main-house', 'photo-point', 'spring', 'well',
//             'blind', 'feeder', 'horse-stall', 'oil-well', 'pier', 'trough', 'windmill',
//             'cabin', 'foremans-house', 'house', 'pens', 'shed-shack', 'water-storage-tank'];

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

icons.forEach(function(icon) {
  var counter = 0;

  console.log(icon);

  colors.forEach(function(color) {
    var nameCurrent = icon;

    generateIcon(nameCurrent, color, counter);

    counter++;
  });
});

function generateIcon(name, color, i){
  var options = {
    name: name,
    color: color.hex,
    nameFile: './icons-png/new-icons/'+ name + '.png',
    nameSmall: name + '-small.png',
    nameCircleOuput: name+'-circle-' + color.name + '.png',
    nameRectangleOuput: name+'-rectangle-' + color.name + '.png',
    nameCircle: 'circle-'+color.hex+'.png',
    nameRectangle: 'round-rectangle-'+color.hex+'.png'
  };

  generateCircleIcons(options, function(){
    generateRectangleIcons(options, function(){})
  });
}


function generateCircleIcons(options, callback){
  im.convert(['transparent.png', '-fill', options.color,
              '-stroke', 'white', '-strokewidth', '3',
              '-draw', 'circle 35,35 10,30', options.nameCircle],

    function(err, stdout){

      if (err) {
        console.log('stdout:', err);
      };

      im.convert([options.nameFile,
                  '-resize'    , '50x50',
                  options.nameSmall
                ],

        function(err, stdout){
          if (err) {
            console.log('stdout:', err);
          };
            im.composite([
              '-gravity', 'center',
              options.nameSmall,
              options.nameCircle,
              options.nameCircleOuput
            ],

            function(err, stdout){
                  if (err) {
                    console.log('stdout:', err);
                  };

              callback();

            });

        });

    });

}


function generateRectangleIcons(options){
  im.convert(['transparent.png', '-fill', options.color,
              '-stroke', 'white', '-strokewidth', '3',
              '-draw', 'roundrectangle 10,10 60,60 5,5', options.nameRectangle],
    function(err, stdout){
      if (err) {
        console.log('stdout:', err);
      };
      im.convert([options.nameFile,
                  '-resize', '50x50',
                  options.nameSmall],
        function(err, stdout){
          if (err) {
            console.log('stdout:', err);
          };

            im.composite([
              '-gravity', 'center',
              options.nameSmall,
              options.nameRectangle,
              options.nameRectangleOuput
            ],

            function(err, stdout){
              if (err) {
                console.log('stdout:', err);
              };

            });

        });

    });
}
