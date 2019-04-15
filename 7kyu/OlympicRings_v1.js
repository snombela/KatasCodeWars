function olympicRing(a) {
  var count = 0;
  var ring = [
    'a',
    'b',
    'd',
    'e',
    'g',
    'o',
    'p',
    'q',
    'A',
    'B',
    'D',
    'O',
    'P',
    'Q',
    'R',
  ];
  for (var i = 0; i < a.length; i++) {
    if (ring.includes(a[i])) {
      count += 1;
    }
    if (a[i] === 'B') {
      count++;
    }
  }

  count = Math.floor(count / 2);

  if (count <= 1) {
    return 'Not even a medal!';
  } else if (count === 2) {
    return 'Bronze!';
  } else if (count === 3) {
    return 'Silver!';
  } else if (count > 3) {
    return 'Gold!';
  }
}
