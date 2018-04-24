module.exports = {
  restrictAccess: {
    getBankAccounts: {
      sourceFile: 'sql-commands.js',
      allow: [{
        functionName: "getBankData",
        fileName: "api-bank\.js",
      }]
    },
    dbCall: {
      sourceFile: 'dbCall.js',
      allow: [{
        functionName: "callDb",
        fileName: "test\.js",
      }]
    }
  }
}
