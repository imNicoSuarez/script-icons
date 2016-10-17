'use strict';

var im = require('simple-imagemagick');

var colors = require('./config.json').colors;

var icons = ['star', 'air-port', 'fire-hydrant', 'fire-station', 'rescue-ems',
              'water-tower', 'soccer-field', 'baseball-field', 'fooball-field',
              'street-light', 'trafic-light'];

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
    nameCircleOuput: name+'-circle-border-' + color.name + '.png',
    nameRectangleOuput: name+'-rectangle-border-' + color.name + '.png',
    nameCircle: 'circle-'+color.hex+'.png',
    nameRectangle: 'round-rectangle-'+color.hex+'.png'
  };

  generateCircleIcons(options, function(){
    generateRectangleIcons(options, function(){})
  });
}


function generateCircleIcons(options, callback){
  im.convert(['transparent.png', '-fill', 'white',options.color,
              '-stroke', options.color, '-strokewidth', '3',
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
  im.convert(['transparent.png', '-fill', 'white',
              '-stroke', options.color, '-strokewidth', '3',
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