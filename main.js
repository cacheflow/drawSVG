var rect = $('rect');
console.log(rect);

$(document).ready(function() {
  TweenLite.to(rect, 1, {fill: "red"})
})
