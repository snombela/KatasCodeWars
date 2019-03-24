function wave(word) {
  var arr = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i] === ' ') continue;
    var newWord =
      word.slice(0, i) + word[i].toUpperCase() + word.slice(i + 1, word.length);
    arr.push(newWord);
  }
  return arr;
}
