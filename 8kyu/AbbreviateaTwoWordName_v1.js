function abbrevName(name) {
  let separateWords = name.split(' ');
  console.log(separateWords);
  let firstLetter = separateWords.map(function(letter) {
    return letter[0];
  });
  let joinLetters = firstLetter.join('.');
  return joinLetters.toUpperCase();
}
