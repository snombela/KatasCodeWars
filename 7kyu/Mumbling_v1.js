function accum(s) {
  return s
    .toLowerCase()
    .split('')
    .map((letter, i) => {
      var text = letter.repeat(i + 1);
      return text.replace(letter, letter.toUpperCase());
    })
    .join('-');
}
