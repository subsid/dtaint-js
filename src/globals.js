global.stackContains = function (stack, fns) {
  var stackFns = stack.split("  at ").map(function (v) {
    return v.trim().split(" ");
  }).slice(1);
  for (var i = 0; i < fns.length; i++) {
    var f = fns[i];
    if (!stackFns.find(function (sf) {
      return (new RegExp(f[0])).test(sf[0]) &&
        (new RegExp(f[1])).test(sf[1]);
    })) {
      return false;
    }
  }

  return true;
};

