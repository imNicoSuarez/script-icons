'use strict';

var im = require('simple-imagemagick');

var colors = require('./config.json').colors;

var icons = ['stop'];
var path = 'M22 68 L50 68 L68 48 L68 22 L50 2 L22 2 L02 22 L02 48 Z';

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
    nameRectangleOuput: name+'-custom-' + color.name + '.png',
    nameCircle: 'circle-'+color.hex+'.png',
    nameRectangle: 'custom-'+color.hex+'.png'
  };

  generateRectangleIcons(options, function(){})
}

function generateRectangleIcons(options){
  im.convert(['transparent.png','-fill', options.color,
              '-stroke', 'white', '-strokewidth', '3',
              '-draw', "path '"+path+"'",
              options.nameRectangle],
    function(err, stdout){
      if (err) {
        console.log('stdout:', err);
      };
      im.convert([options.nameFile,
                  '-resize', '60x60',
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
