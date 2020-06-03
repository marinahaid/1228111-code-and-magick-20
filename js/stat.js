'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var TEXT_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_INDENT = 50;
var BAR_WIDTH = 40;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');


  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    ctx.fillStyle = '#000';
    var gistoHeight = times[i] / maxTime * BAR_HEIGHT;
    var bottomGisto = CLOUD_Y + BAR_HEIGHT + (GAP + FONT_GAP) * 3 + GAP;

    ctx.font = 'medium 16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', 150, 30);
    ctx.fillText('Список результатов:', 150, 50);

    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_INDENT + GAP + (BAR_WIDTH + BAR_INDENT) * i, bottomGisto - gistoHeight - 20);

    ctx.fillText(players[i], CLOUD_X + GAP + BAR_INDENT + (BAR_WIDTH + BAR_INDENT) * i, CLOUD_Y + GAP + BAR_HEIGHT + (GAP + FONT_GAP) * 3 + GAP);
    ctx.fillStyle = 'hsl(240,' + Math.random() * 100 + '%, 50%)';
    ctx.fillRect(CLOUD_X + BAR_INDENT + GAP + (BAR_WIDTH + BAR_INDENT) * i, bottomGisto - gistoHeight, BAR_WIDTH, gistoHeight);
  }
};

