function gooseFilter(birds) {
  var arr = [];
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  birds.filter((item, i) => {
    if (geese.indexOf(item) == -1) {
      arr.push(item);
    }
  });
  return arr;
}
