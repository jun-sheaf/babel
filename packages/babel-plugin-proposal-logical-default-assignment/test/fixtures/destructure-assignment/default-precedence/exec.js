var f0 = function (a, b ??= a, c ??= b) {
  return [a, b, c];
};

expect(f0(false, true, null)).toEqual([false, true, true]);

var f1 = function ({a}, b ||= a, c ||= b) {
  return [a, b, c];
};

expect(f1({a: false}, true, null)).toEqual([false, true, true]);

var f2 = function ({a}, b ||= a, c ??= a) {
  return [a, b, c];
};

expect(f2({a: true}, "", null)).toEqual([true, true, true]);
