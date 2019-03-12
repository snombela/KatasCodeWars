function longest(s1, s2) {
  var oneWord = s1 + s2;
  var sorted = oneWord.split('');
  var ordered = sorted.sort();

  var text = '';
  var finalWord = '';

  for (var i = 0; i < ordered.length; i++) {
    if (ordered[i] !== text) {
      finalWord += ordered[i];
      text = ordered[i];
    }
  }

  return finalWord;
}
