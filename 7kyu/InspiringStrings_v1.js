function longestWord(stringOfWords) {
  var arr = stringOfWords.split(' ').sort(function(a, b) {
    return a.length - b.length;
  });
  return arr[arr.length - 1];
}
