function createPhoneNumber(numbers) {
  numbers = String(numbers).split(',');
  numbers.splice(6, 0, '-');
  numbers.splice(3, 0, ') ');
  numbers.splice(0, 0, '(');
  return numbers.join('');
}
