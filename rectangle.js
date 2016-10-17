'use strict';

var im = require('simple-imagemagick');

var colors = require('./config.json').colors;

var icons = ['trafic-flow', 'one-way-right', 'one-way-left',
             'water-meter', 'electrical-meter', 'gas-meter', 'vehicle-maintenance',
             'multi-family', 'bridge'];

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


  generateRectangleIcons(options, function(){})
}

function generateRectangleIcons(options){
  im.convert(['transparent.png', '-fill', options.color,
              '-stroke', 'white', '-strokewidth', '3',
              '-draw', 'roundrectangle 0,20 70,50 5,5', options.nameRectangle],
    function(err, stdout){
      if (err) {
        console.log('stdout:', err);
      };
      im.convert([options.nameFile,
                  '-resize', '65x65',
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

