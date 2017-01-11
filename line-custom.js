'use strict';

var im = require('simple-imagemagick');

var colors = [{fill: "#00A884", stroke: "#73FFDF"}];

// var colors = require('./config.json').colors;

var icons = ['star'];

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
    stroke: color.stroke,
    fill: color.fill,
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
  im.convert(['transparent.png', '-fill', options.fill,
              '-stroke', options.stroke, '-strokewidth', '2',
              '-draw', 'roundrectangle 10,30 60,38 5,5', options.nameRectangle],
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

        });

    });
}
