function XO(str) {
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == 'x' || str[i] == 'X') {
      countX++;
    } else if (str[i] == 'o' || str[i] == 'O') {
      countO++;
    }
  }
  if (countX === countO) {
    return true;
  } else {
    return false;
  }
}
