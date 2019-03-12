function elevator(left, right, call) {
  var l = Math.abs(call - left);
  var r = Math.abs(call - right);

  return r > l ? 'left' : 'right';
}
