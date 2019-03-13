function whoIsPaying(name) {
  var n = [];
  if (name.length > 2) {
    n.push(name) + n.push(name[0] + name[1]);
  } else {
    n.push(name);
  }
  return n;
}
