'use strict';

var im = require('simple-imagemagick');

var colors = require('./config.json').colors;

var icons = ['right-turn', 'left-turn', 'two-way-traffic'];
var path = 'M1.56775103,33.9141923 C0.530958979,34.9509843 0.531224767,36.6297948 1.56775103,37.666321 L33.9141923,70.0127623 C34.9509843,71.0495543 36.6297948,71.0492886 37.666321,70.0127623 L70.0127623,37.666321 C71.0495543,36.629529 71.0492886,34.9507186 70.0127623,33.9141923 L37.666321,1.56775103 C36.629529,0.530958979 34.9507186,0.531224767 33.9141923,1.56775103 L1.56775103,33.9141923 Z';

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
    nameRectangleOuput: name+'-diamond-border-' + color.name + '.png',
    nameCircle: 'circle-'+color.hex+'.png',
    nameRectangle: 'round-diamond-'+color.hex+'.png'
  };

  generateRectangleIcons(options, function(){})
}

function generateRectangleIcons(options){
  im.convert(['transparent.png','-fill', options.color,
              '-stroke', 'black', '-strokewidth', '3',
              '-draw', "path '"+path+"'",
              options.nameRectangle],
    function(err, stdout){
      if (err) {
        console.log('stdout:', err);
      };
      im.convert([options.nameFile,
                  '-resize', '45x45',
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

