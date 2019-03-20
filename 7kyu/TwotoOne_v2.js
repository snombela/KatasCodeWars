function longest(s1, s2) {
  let union = s1 + s2;
  var order = union
    .split('')
    .sort()
    .unique();
  return order.unique().join('');
}

Array.prototype.unique = function() {
  return this.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
};
