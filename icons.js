'use strict';

var im = require('simple-imagemagick');

var colors = [{ color_name: 'light-red',    color_hexa: '#FF4747' },
              { color_name: 'red',          color_hexa: '#D40000' },
              { color_name: 'dark-red',     color_hexa: '#9A0000' },
              { color_name: 'light-purple', color_hexa: '#D568C0' },
              { color_name: 'purple',       color_hexa: '#A02C89' },
              { color_name: 'dark-purple',  color_hexa: '#6A1D5B' },
              { color_name: 'light-blue',   color_hexa: '#00AEEF' },
              { color_name: 'blue',         color_hexa: '#2C5AA0' },
              { color_name: 'dark-blue',    color_hexa: '#1A355F' },
              { color_name: 'light-green',  color_hexa: '#73FFDF' },
              { color_name: 'green',        color_hexa: '#447821' },
              { color_name: 'dark-green',   color_hexa: '#294914' },
              { color_name: 'light-orange', color_hexa: '#FF9E5E' },
              { color_name: 'orange',       color_hexa: '#FF6600' },
              { color_name: 'dark-orange',  color_hexa: '#B14700' },
              { color_name: 'light-pink',   color_hexa: '#FF94BF' },
              { color_name: 'pink',         color_hexa: '#FF5599' },
              { color_name: 'dark-pink',    color_hexa: '#DC256E' },
              { color_name: 'light-brown',  color_hexa: '#B5622B' },
              { color_name: 'brown',        color_hexa: '#803300' },
              { color_name: 'dark-brown',   color_hexa: '#622700' },
              { color_name: 'light-yellow', color_hexa: '#FFE888' },
              { color_name: 'yellow',       color_hexa: '#FFCC00' },
              { color_name: 'dark-yellow',  color_hexa: '#BF9900' },
              { color_name: 'white',        color_hexa: '#FFFFFF' },
              { color_name: 'gray-25',      color_hexa: '#BFBFBF' },
              { color_name: 'gray-58',      color_hexa: '#6A6A6A' },
              { color_name: 'gray-70',      color_hexa: '#4d4d4d' },
              { color_name: 'gray-85',      color_hexa: '#252525' },
              { color_name: 'black',        color_hexa: '#000000' }]

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
