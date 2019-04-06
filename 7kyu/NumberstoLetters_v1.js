function switcher(x) {
  var abc = ' ?!abcdefghijklmnopqrstuvwxyz '.split('').reverse();
  return x.reduce((result, value) => {
    return (result += abc[value]);
  }, '');
}
