function firstNonRepeatingLetter(s) {
  var letters = s.split('');
  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];

    var count = 0;

    for (var j = 0; j < letters.length; j++) {
      if (letter.toLowerCase() == letters[j].toLowerCase()) {
        count++;
      }
    }

    if (count == 1) {
      return letter;
    }
  }

  return '';
}
