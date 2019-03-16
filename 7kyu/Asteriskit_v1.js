function asteriscIt(n) {
  n = n.toString();
  n = n.replace(new RegExp(',', 'g'), '');
  let num = '';
  for (var i = 0; i < n.length; i++) {
    num += n[i];
    if (n[i] % 2 === 0 && n[i + 1] % 2 === 0) {
      num += '*';
    }
  }
  return num;
}
