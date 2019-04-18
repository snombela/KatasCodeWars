function reverseNumber(n) {
  var str = n.toString();
  if (str.includes('-')) {
    var rev = str
      .replace('-', '')
      .split('')
      .reverse()
      .join('');
    var num = '-' + rev;
    return +num;
  } else {
    var rev = n
      .toString()
      .split('')
      .reverse()
      .join('');
    return +rev;
  }
}
