Array.prototype.sortReloaded = function(dir) {
  let arr = this.slice();
  if (dir === 'asc' || dir === '' || dir === undefined) {
    return arr.sort((a, b) => a - b);
  } else if (dir === 'desc') {
    return arr.sort((a, b) => b - a);
  } else {
    return false;
  }
};
