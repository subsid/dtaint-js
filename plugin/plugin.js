var rules = require('../rules')
var t = require('babel-types')

function generateCheckStack(fns, prevBody) {
  let props = []

  return t.ifStatement(
    t.unaryExpression(
      "!",
      t.callExpression(
        t.identifier("stackContains"),
        [
          t.memberExpression(
            t.newExpression(t.identifier("Error"), []),
            t.identifier("stack")
          ),
          t.arrayExpression(fns)
        ])
    ),
    t.blockStatement([
      t.expressionStatement(
        t.callExpression(
          t.memberExpression(t.identifier("console"), t.identifier("log")),
          [t.stringLiteral("Unauthorized call to dbCall. exiting...")]
      )),
      t.expressionStatement(
        t.callExpression(
          t.memberExpression(t.identifier("process"), t.identifier("exit")),
          [t.numericLiteral(0)]))
    ])
  )
}

module.exports = function({ types: t }) {
    return {
      visitor: {
        Identifier(path, state) {
        },

        FunctionDeclaration(path, state) {
          var body = path.get("body")
          if (rules.restrictAccess[path.node.id.name]) {
            var r = rules.restrictAccess[path.node.id.name]
            var allowedFns = r.allow.map((v) => {
              return t.arrayExpression([t.stringLiteral(v.functionName), t.stringLiteral(v.fileName)])
            })
            path.get("body").unshiftContainer(
              'body',
              generateCheckStack(allowedFns, path.get("body"))
            )
          }
        }
      }
  };
}
