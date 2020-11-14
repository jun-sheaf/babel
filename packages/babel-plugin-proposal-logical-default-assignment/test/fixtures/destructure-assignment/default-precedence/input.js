var f0 = function (a, b ??= a, c ??= b) {
  return [a, b, c];
};

var f1 = function ({a}, b ||= a, c ||= b) {
  return [a, b, c];
};

var f2 = function ({a}, b ||= a, c ??= a) {
  return [a, b, c];
};
  