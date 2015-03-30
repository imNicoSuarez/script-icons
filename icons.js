'use strict';

var im = require('simple-imagemagick');

var colors = require('./config.json').colors;

var icons = ['barn' , 'dump', 'gate', 'main-house', 'photo-point', 'spring', 'well',
            'blind', 'feeder', 'horse-stall', 'oil-well', 'pier', 'trough', 'windmill',
            'cabin', 'foremans-house', 'house', 'pens', 'shed-shack', 'water-storage-tank']

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
    color: color.color_hexa,
    nameFile: './icons-png/ranching-png/'+ name + '.png',
    nameSmall: name + '-small.png',
    nameCircleOuput: name+'-circle-' + color.color_name + '.png',
    nameRectangleOuput: name+'-rectangle-' + color.color_name + '.png',
    nameCircle: 'circle-'+color.color_hexa+'.png',
    nameRectangle: 'round-rectangle-'+color.color_hexa+'.png'
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
