function points(games) {
  var count = 0;

  games.forEach(function(match) {
    var points = match.split(':');

    if (points[0] > points[1]) {
      count += 3;
    } else if (points[0] === points[1]) {
      count += 1;
    }
  });

  return count;
}
