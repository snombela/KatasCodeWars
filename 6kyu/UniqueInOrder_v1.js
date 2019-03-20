var uniqueInOrder = function(iterable) {
  let z = [];
  if (typeof iterable == 'string') {
    iterable = iterable.split('');
  }
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      z.push(iterable[i]);
    }
  }
  return z;
};
