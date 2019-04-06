function removeDuplicateWords(s) {
  return s
    .split(' ')
    .filter((item, i, arr) => {
      return arr.indexOf(item) === i;
    })
    .join(' ');
}
