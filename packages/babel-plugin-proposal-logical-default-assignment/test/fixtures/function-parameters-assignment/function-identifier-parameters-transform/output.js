var a;

a = function (_darg) {
  var a = _darg || "test";
};

a = function (_darg2) {
  var a = _darg2 ?? "test";
};

a = function (_darg3, _darg4) {
  var a = _darg3 || "test";
  var b = _darg4 ?? "test";
};

a = function (_darg5, _darg6) {
  var a = _darg5 ?? "test";
  var b = _darg6 || "test";
};

a = function (_darg7, _darg8) {
  var a = _darg7 || "test";
  var b = _darg8 ?? a;
};

a = function (_darg9, _darg10) {
  var a = _darg9 ?? "test";
  var b = _darg10 || a;
};
