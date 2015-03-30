'use strict';

var im = require('simple-imagemagick');

var customColor = {name: 'blue', hex:'#03728c'};

var lines =  [ { name: 'fence', type: 'dotted', fill: false, background: false, strokewidth: 2},
               { name: 'road-trail', type: 'longdash', fill: false, background: false, strokewidth: 2},
               { name: 'primary-road', type: 'solid', fill: false, background: false, strokewidth: 2 },
               { name: 'pipeline', type: 'dotted', fill: false, background: true, strokewidth: 2 },
               { name: 'transmission-line', type: 'dotted', fill: true, background: false, strokewidth: 2 },
               { name: 'stream-intermitent', type: 'twodash', fill: false, background: false, strokewidth: 4,  oneColor: true, color: customColor},
               { name: 'river-creek', type: 'solid', fill: false, background: false, strokewidth: 4, oneColor: true, color: customColor } ]

var colors = require('./config.json').colors;

lines.forEach(function(line) {
  var counter = 0;

  console.log(line.name);
  if (line.oneColor) {
    var nameCurrent = line.name;

    generateLine(line, line.color,  counter);

    counter++;
  } else {
    colors.forEach(function(color) {
      var nameCurrent = line.name;

      generateLine(line, color,  counter);

      counter++;
    });
  }
});

function generateLine(line, color,  i){
  var options = {
    name: line.name,
    color: ( (line.fill || line.background) ? "#000000" : color.hex ),
    backgroundColor:  ( (line.background) ? color.hex : 'none'),
    fillColor: ( (line.fill) ? color.hex : 'none'),
    fill: line.fill,
    background: line.background,
    line: line.type,
    strokewidth: line.strokewidth,
    nameFile: './lines/ranching-png/'+ line.name + '.png',
    nameSmall: line.name + '-small.png',
    nameLineOuput: line.name+'-line-' + color.name + '.png',
    nameLine: 'line-'+color.hex+'.png',
    nameBackgroundLine: 'line-background-'+color.hex+'.png'
  };

  generateDrawLine(options, function(){});
}

function generateDrawLine(options, callback){
  var name = ((options.background) ? options.nameLine : options.nameLineOuput);
  console.log(options.color);

  im.convert(['transparent.png', '-fill', options.fillColor,
              '-stroke', options.color, '-strokewidth', options.strokewidth,
              '-draw', typeLine(options.line), name],

  function(err, stdout){

    if (err) {
      console.log('stdout:', err);
    };
    if (options.background) {
      generateDrawLineBackgraund(options, callback);
    } else {
      callback();
    }

  });

}

function generateDrawLineBackgraund(options, callback){
  im.convert(['transparent.png', '-fill', 'none',
              '-stroke', options.backgroundColor, '-strokewidth', '4',
              '-draw', typeLine('solid') , options.nameBackgroundLine],

  function(err, stdout){
    if (err) {
      console.log('stdout:', err);
    };

    im.composite([
      '-gravity', 'center',
      options.nameLine,
      options.nameBackgroundLine,
      options.nameLineOuput
    ],

    function(err, stdout){
      if (err) {
        console.log('stdout:', err);
      };

      callback();
    });

  });
}

function typeLine(line){
  var styleLine = ''

  switch(line) {
    case 'dashed':
      styleLine = "stroke-dasharray 5 3 path 'M 10,30 L 90,30'" ;
      break;
    case 'dotted':
      styleLine =  "stroke-dasharray 1 6 path 'M 10,30 L 90,30'" ;
      break;
    case 'dotdash':
      styleLine = "stroke-dasharray 1 3 3 3 path 'M 10,30 L 90,30'" ;
      break;
    case 'longdash':
      styleLine =  "stroke-dasharray 8 10 path 'M 10,30 L 90,30'" ;
      break;
    case 'twodash':
      styleLine =  "stroke-dasharray 10 3 3 3 path 'M 10,30 L 90,30'" ;
      break;
    case 'solid':
      styleLine =  "path 'M 10,30 L 90,30'" ;
      break;
    default:
      styleLine =  " " ;
  }
  return styleLine;
}
