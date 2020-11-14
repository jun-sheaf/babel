function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var a;

a = function (_darg) {
  var _ref = _darg || "test";

  _objectDestructuringEmpty(_ref);
};

a = function (_darg2) {
  var _ref2 = _darg2 ?? "test";

  _objectDestructuringEmpty(_ref2);
};

a = function (_darg3, _darg4) {
  var _ref3 = _darg3 || "test";

  _objectDestructuringEmpty(_ref3);

  var _ref4 = _darg4 ?? "test",
      _ref5 = _toArray(_ref4);
};

a = function (_darg5, _darg6) {
  var _ref6 = _darg5 ?? "test",
      _ref7 = _toArray(_ref6);

  var _ref8 = _darg6 || "test";

  _objectDestructuringEmpty(_ref8);
};

a = function (_darg7, _darg8) {
  var _ref9 = _darg7 || "test",
      _ref10 = _slicedToArray(_ref9, 1),
      t = _ref10[0];

  var _ref11 = _darg8 ?? t,
      _ref12 = _slicedToArray(_ref11, 1),
      t2 = _ref12[0];
};
