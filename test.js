require('babel-core').buildExternalHelpers()

global.stackContains = function(stack, fns) {
  const stackFns = stack.split("at").map((v) => v.trim().split(" ")).slice(1)
  for (var f of fns) {
    if (!stackFns.find((sf) => sf[0] === f)) {
      return false;
    }
  }

  return true;
}

function doSquare(n) {
  if (stackContains((new Error()).stack, ['square'])) {
    console.log('yup')
  }
  return n
}

function square() {
  doSquare(10)
}

square()
