function swap(st) {
  var x = st.split('');
  var final = [];
  for (var i = 0; i < x.length; i++) {
    if (
      x[i] === 'a' ||
      x[i] === 'e' ||
      x[i] === 'i' ||
      x[i] === 'o' ||
      x[i] === 'u'
    ) {
      final.push(x[i].toUpperCase());
    } else {
      final.push(x[i]);
    }
  }
  return final.join('');
}
