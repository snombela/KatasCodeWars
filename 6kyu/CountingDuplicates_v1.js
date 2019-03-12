function duplicateCount(text) {
  var dict = {};
  text = text.toLowerCase();

  for (var i = 0; i < text.length; i++) {
    var letter = text[i];

    if (dict[letter] == null) {
      dict[letter] = 1;
    } else {
      dict[letter] += 1;
    }
  }

  var count = 0;

  for (var letter in dict) {
    if (dict[letter] > 1) count += 1;
  }

  return count;
}
