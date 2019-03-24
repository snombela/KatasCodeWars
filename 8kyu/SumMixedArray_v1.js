function sumMix(x) {
  return x.reduce((a, b) => {
    return a + parseInt(b);
  }, 0);
}
