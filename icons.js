'use strict';

var im = require('simple-imagemagick');

var colors = ['#ef4a4b','#d52128','#991c20','#c76baa','#a12b8a','#6b1f5a',
              '#21abe2','#265ba2','#19355f','#90d2c7','#437839','#2e4922',
              '#f89d5f','#f06723','#b04925','#f293bc','#ef5598','#de216f',
              '#b66329','#80351a','#5f2b11','#fbe986','#fecd0a','#bd9a2f',
              '#ffffff','#c0bfbe','#6b6a6a','#4d4e4e','#232523','#010101' ]

var icons = ['barn' , 'dump', 'gate', 'main-house', 'photo-point', 'spring', 'well',
            'blind', 'feeder', 'horse-stall', 'oil-well', 'pier', 'trough', 'windmill',
            'cabin', 'foremans-house', 'house', 'pens', 'shed-shack', 'water-storage-tank']

icons.forEach(function(icon) {
  var counter = 0;

  console.log(icon);

  colors.forEach(function(color) {
    var colorCurrent = color;
    var nameCurrent = icon;

    generateIcon(nameCurrent, colorCurrent, counter);

    counter++;
  });
});

function generateIcon(name, color, i){
  var options = {
    name: name,
    color: color,
    nameFile: './icons-png/ranching-png/'+ name + '.png',
    nameSmall: name + '-small.png',
    nameCircleOuput: name+'-circle-' + i + '.png',
    nameRectangleOuput: name+'-rectangle-' + i + '.png',
    nameCircle: 'circle-'+color+'.png',
    nameRectangle: 'round-rectangle-'+color+'.png'
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
