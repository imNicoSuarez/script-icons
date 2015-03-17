'use strict';

var FS = require('fs'),
    PATH = require('path'),
    im = require('simple-imagemagick');

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

  colors.forEach(function(color) {
    var colorCurrent = color;
    var nameCurrent = icon;

    console.log(nameCurrent+':', colorCurrent);

    generateIcon(nameCurrent, colorCurrent, counter);

    counter++;
  });
});

function generateIcon(name, color, i){

  var nameFile = './icons-png/ranching-png/'+ name + '.png';
  var nameSmall = name + '-small.png';
  var nameCircleOuput = name+'-circle-' + i + '.png';
  var nameRectangleOuput = name+'-rectangle-' + i + '.png';
  var nameCircle =  'circle-'+color+'.png'
  var nameRectangle =  'round-rectangle-'+color+'.png'

  im.convert(['transparent.png', '-fill', color,
                '-draw', 'circle 35,35 10,30', nameCircle],
      function(err, stdout){
        if (err) {
          console.log('stdout:', err);
        };
        im.convert([nameFile,
                    '-resize'    , '50x50',
                    nameSmall
                  ],

          function(err, stdout){
            if (err) {
              console.log('stdout:', err);
            };
              im.composite([
                '-gravity', 'center',
                nameSmall,
                nameCircle,
                nameCircleOuput
              ],

              function(err, stdout){
                    if (err) {
                      console.log('stdout:', err);
                    };

                  im.convert(['transparent.png', '-fill', color,
                    '-draw', 'roundrectangle 10,10 60,60 5,5', nameRectangle],
                    function(err, stdout){
                      if (err) {
                        console.log('stdout:', err);
                      };
                      im.convert([nameFile,
                                  '-resize', '50x50',
                                  nameSmall],
                        function(err, stdout){
                          if (err) {
                            console.log('stdout:', err);
                          };

                            im.composite([
                              '-gravity', 'center',
                              nameSmall,
                              nameRectangle,
                              nameRectangleOuput
                            ],

                            function(err, stdout){
                                  if (err) {
                                    console.log('stdout:', err);
                                  };

                            });

                        });

                    });

              });

          });

      });


}





