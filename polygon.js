'use strict';

var im = require('simple-imagemagick');

var polygons = [
                { name: 'pond-tank', stroke: true, fill: true, shape: "path 'M 10,10 15,61 56,61 61,25 Z'"},
                { name: 'boundaty', stroke: true, fill: true, shape: "path 'M 10,10 15,61 56,61 61,25 Z M 18,18 20,56 51,56 54,30 Z'"},
                { name: 'triangle', stroke: true, fill: true, shape: "path 'M 10,60 35.5,10 61,60 Z'"},
                { name: 'star', stroke: true, fill: true, shape: "path 'M 35.5 7 l 9.4 19.1 l 21 3 l -15.9 12.9 l 4.3 22.9 l -18.8 -9.9 l -18.8 9.9 l 3.6 -21 l -15.2 -14.8 l 21 -3 z'"},
                { name: 'square', stroke: true, fill: true, shape: "path 'm 5,5 60,0 0,60 -60,0 z'"},
                { name: 'plane', stroke: true, fill: true, shape: "path 'M 29.5 17 v 8.406 l -22.313 14.281 v 6.719 l 22.313 -4.906 v 13.594 l -7.094 5.875 v 5.094 l 12.875 -3.336 l 12.875 3.336 v -5.094 l -7.094 -5.875 v -13.594 l 22.313 4.906 v -6.719 l -22.313 -14.281 v -8.406 c 0 -15.045 -11.563 -15.076 -11.563 0 z'"},
                { name: 'pin', stroke: true, fill: true, shape: "path 'M 55 25 c 0 -12.1 -8.5 -19.1 -19.1 -19.1 c -10.5 0 -19.1 6.9 -19.1 19.1 c 0 17.1 19.1 40.9 19.1 40.9 c 0 0 19.1 -23.8 19.1 -40.9 z'"},
                { name: 'circle', stroke: true, fill: true, shape: "path 'm 65,35c 0,16.56854 -13.43145,30 -30,30 -16.56854,0 -30,-13.43146 -30,-30 0,-16.56854 13.43146,-30 30,-30 16.56855,0 30,13.43146 30,30 z'"}
              ]


var colors = require('./config.json').colors;

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
    fillColor: ( (polygon.fill) ? color.hex : 'none' ),
    strokeColor: ( (polygon.stroke) ? '#FFFFFF' : 'none' ),
    nameFile: './polygon/ranching-png/'+ polygon.name + '.png',
    nameSmall: polygon.name + '-small.png',
    namePolygonOuput: polygon.name+'-' + color.name + '.png',
    namePolygon: 'polygon-'+color.hex+'.png',
    shape: polygon.shape,
    widthStroke: polygon.widthStroke
  };

  generateDrawPolygon(options, function(){});
}

function generateDrawPolygon(options, callback){

  im.convert(['transparent.png', '-fill', options.fillColor,
              '-stroke', options.strokeColor, '-strokewidth', '6',
              '-draw', options.shape , 
              '-stroke', 'none', 
              '-draw', options.shape, options.namePolygonOuput], 

  function(err, stdout){

    if (err) {
      console.log('stdout:', err);
    };

    callback();

  });

}