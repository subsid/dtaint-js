module.exports = {
  restrictAccess: {
    getBankAccounts: {
      sourceFile: 'sql-commands.js',
      allow: [{
        functionName: "getBankData",
        fileName: "api-bank\.js",
      }]
    },
    // Regex example
    dbCall: {
      sourceFile: 'dbCall.js',
      allow: [{
        functionName: "makeDbCall.*",
        fileName: "test\.js",
      }]
    }
  },
  // inputValidation: {
  //   getInfo: {
  //     parameter: 'name',
  //     sourceFile: 'sql-commands.js',
  //     allow: ["string"]
  //   }
  // }
}
