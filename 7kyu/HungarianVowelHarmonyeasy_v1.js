function dative(word) {
  for (var i = word.length - 1; i >= 0; i--) {
    if (
      word[i] === 'e' ||
      word[i] === 'é' ||
      word[i] === 'i' ||
      word[i] === 'í' ||
      word[i] === 'ö' ||
      word[i] === 'ő' ||
      word[i] === 'ü' ||
      word[i] === 'ű'
    ) {
      return word + 'nek';
    } else if (
      word[i] === 'a' ||
      word[i] === 'á' ||
      word[i] === 'o' ||
      word[i] === 'ó' ||
      word[i] === 'u' ||
      word[i] === 'ú'
    ) {
      return word + 'nak';
    }
  }
}
