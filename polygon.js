'use strict';

var im = require('simple-imagemagick');

var polygons = [{ name: 'boundaty', stroke: true, fill: false, shape: "path 'M 10,10 15,61 56,61 61,25 Z'"},
                { name: 'pond-tank', stroke: false, fill: true, shape: "path 'M 10,10 15,61 56,61 61,25 Z'"},
                { name: 'triangle', stroke: false, fill: true, shape: "path 'M 10,60 35.5,15 61,60 Z'"},
                { name: 'star', stroke: false, fill: true, shape: "path 'm 35.5,10 9.4,19.1 21,3 -15.2,14.8 3.6,21 -18.8,-9.9 -18.8,9.9 3.6,-21 -15.2,-14.8 21,-3 z'"},
                { name: 'square', stroke: false, fill: true, shape: "path 'm 1.7,1 60,0 0,60 -60,0 z'"},
                { name: 'plane', stroke: false, fill: true, shape: "path 'm 25.5,15 0,8.40625 -22.3125,14.28125 0,6.71875 22.3125,-4.90625 0,13.59375 -7.09375,5.875 0,5.09375 12.875,-3.33563 12.875,3.33563 0,-5.09375 -7.09375,-5.875 0,-13.59375 22.3125,4.90625 0,-6.71875 -22.3125,-14.28125 0,-8.40625 c 0,-15.04471 -11.5625,-15.07644 -11.5625,0 z'"},
                { name: 'pin', stroke: false, fill: true, shape: "path 'm 50,25 c 0,-12.1 -8.5,-19.1 -19.1,-19.1 -10.5,0 -19.1,6.9 -19.1,19.1 0,17.10 19.1,40.90 19.1,40.90 0,0 19.1,-23.8 19.1,-40.90 z'"},
                { name: 'circle', stroke: false, fill: true, shape: "path 'm 65,35c 0,16.56854 -13.43145,30 -30,30 -16.56854,0 -30,-13.43146 -30,-30 0,-16.56854 13.43146,-30 30,-30 16.56855,0 30,13.43146 30,30 z'"}
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
    strokeColor: ( (polygon.stroke) ? color.hex : 'none' ),
    nameFile: './polygon/ranching-png/'+ polygon.name + '.png',
    nameSmall: polygon.name + '-small.png',
    namePolygonOuput: polygon.name+'-' + color.name + '.png',
    namePolygon: 'polygon-'+color.hex+'.png',
    shape: polygon.shape
  };

  generateDrawPolygon(options, function(){});
}

function generateDrawPolygon(options, callback){

  im.convert(['transparent.png', '-fill', options.fillColor,
              '-stroke', options.strokeColor, '-strokewidth', '5',
              '-draw', options.shape , options.namePolygonOuput],

  function(err, stdout){

    if (err) {
      console.log('stdout:', err);
    };

    callback();

  });

}