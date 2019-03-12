function enough(cap, on, wait) {
  if (on + wait <= cap) {
    return 0;
  } else if (on + wait > cap) {
    return on + wait - cap;
  }
}
