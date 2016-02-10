var rect = $('rect');

$(document).ready(function() {
  TweenLite.from(rect, 2, {drawSVG: 0, fill: "red"})
})
