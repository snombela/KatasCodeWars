var orderedCount = function(text) {
  var x = [];
  var countLetter = {};
  for (var i = 0; i < text.length; i++) {
    if (x.indexOf(text[i]) == -1) {
      x.push(text[i]);
      countLetter[text[i]] = 1;
    } else {
      countLetter[text[i]] += 1;
    }
  }
  var output = [];
  for (var i = 0; i < x.length; i++) {
    output.push([x[i], countLetter[x[i]]]);
  }
  return output;
};
