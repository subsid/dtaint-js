'use strict';

function doSquare(n) {
  console.log(arguments.callee.caller.name);
  console.log(n);
  return n;
}

function square() {
  doSquare(10);
}
