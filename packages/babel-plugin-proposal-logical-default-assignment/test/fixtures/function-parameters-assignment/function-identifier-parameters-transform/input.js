var a;
a = function (a ||= "test") {};
a = function (a ??= "test") {};
a = function (a ||= "test", b ??= "test") {};
a = function (a ??= "test", b ||= "test") {};
a = function (a ||= "test", b ??= a) {};
a = function (a ??= "test", b ||= a) {};
