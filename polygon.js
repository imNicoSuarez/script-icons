'use strict';

var im = require('simple-imagemagick');

var polygons = [{ name: 'boundaty', stroke: true, fill: false},
                { name: 'pond-tank', stroke: false, fill: true}]

var colors = ['#ef4a4b','#d52128','#991c20','#c76baa','#a12b8a','#6b1f5a',
              '#21abe2','#265ba2','#19355f','#90d2c7','#437839','#2e4922',
              '#f89d5f','#f06723','#b04925','#f293bc','#ef5598','#de216f',
              '#b66329','#80351a','#5f2b11','#fbe986','#fecd0a','#bd9a2f',
              '#ffffff','#c0bfbe','#6b6a6a','#4d4e4e','#232523','#010101' ]

polygons.forEach(function(polygon) {
  var counter = 0;

  colors.forEach(function(color) {
    var colorCurrent = color;
    var nameCurrent = polygon.name;

    generatePolygon(polygon, colorCurrent,  counter);

    counter++;
  });

});

function generatePolygon(polygon, color,  i){
  var options = {
    name: polygon.name,
    fillColor: ( (polygon.fill) ? color : 'none' ),
    strokeColor: ( (polygon.stroke) ? color : 'none' ),
    nameFile: './polygon/ranching-png/'+ polygon.name + '.png',
    nameSmall: polygon.name + '-small.png',
    namePolygonOuput: polygon.name+'-polygon-' + i + '.png',
    namePolygon: 'polygon-'+color+'.png',
  };

  generateDrawPolygon(options, function(){});
}

function generateDrawPolygon(options, callback){

  im.convert(['transparent.png', '-fill', options.fillColor,
              '-stroke', options.strokeColor, '-strokewidth', '5',
              '-draw', "path 'M 10,10 15,61 56,61 61,25 Z'" , options.namePolygonOuput],

  function(err, stdout){

    if (err) {
      console.log('stdout:', err);
    };

    callback();

  });

}