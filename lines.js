'use strict';

var im = require('simple-imagemagick');

var lines =  [ { name: 'fence', type: 'dotted', fill: false, background: false},
               { name: 'road-trail', type: 'longdash', fill: false, background: false },
               { name: 'primary-road', type: 'solid', fill: false, background: false },
               { name: 'pipeline', type: 'dotted', fill: false, background: true},
               { name: 'transmission-line', type: 'dotted', fill: true, background: false},
               { name: 'stream-intermitent', type: 'twodash', fill: false, background: false, oneColor: true, color: '#03728c'},
               { name: 'river-creek', type: 'solid', fill: false, background: false, oneColor: true, color: '#03728c'} ]

var colors = ['#ef4a4b','#d52128','#991c20','#c76baa','#a12b8a','#6b1f5a',
              '#21abe2','#265ba2','#19355f','#90d2c7','#437839','#2e4922',
              '#f89d5f','#f06723','#b04925','#f293bc','#ef5598','#de216f',
              '#b66329','#80351a','#5f2b11','#fbe986','#fecd0a','#bd9a2f',
              '#ffffff','#c0bfbe','#6b6a6a','#4d4e4e','#232523','#010101' ]

lines.forEach(function(line) {
  var counter = 0;

  console.log(line.name);
  if (line.oneColor) {
    var colorCurrent = line.color;
    var nameCurrent = line.name;

    generateLine(line, colorCurrent,  counter);

    counter++;
  } else {
    colors.forEach(function(color) {
      var colorCurrent = color;
      var nameCurrent = line.name;

      generateLine(line, colorCurrent,  counter);

      counter++;
    });
  }
});

function generateLine(line, color,  i){
  var options = {
    name: line.name,
    color: ( (line.fill || line.background) ? "#000000" : color ),
    backgroundColor:  ( (line.background) ? color : 'none'),
    fillColor: ( (line.fill) ? color : 'none'),
    fill: line.fill,
    background: line.background,
    line: line.type,
    nameFile: './lines/ranching-png/'+ line.name + '.png',
    nameSmall: line.name + '-small.png',
    nameLineOuput: line.name+'-line-' + i + '.png',
    nameLine: 'line-'+color+'.png',
    nameBackgroundLine: 'line-background-'+color+'.png'
  };

  generateDrawLine(options, function(){});
}

function generateDrawLine(options, callback){
  var name = ((options.background) ? options.nameLine : options.nameLineOuput);
  console.log(options.color);

  im.convert(['transparent.png', '-fill', options.fillColor,
              '-stroke', options.color, '-strokewidth', '1',
              '-draw', typeLine(options.line) , name],

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
