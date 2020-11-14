var a;
a = function ({} ||= "test") {};
a = function ({} ??= "test") {};
a = function ({} ||= "test", [] ??= "test") {};
a = function ([] ??= "test", {} ||= "test") {};
a = function ([t] ||= "test", [t2] ??= t) {};
