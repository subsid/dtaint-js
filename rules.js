module.exports = {
  restrictAccess: {
    dbCall: {
      sourceFile: 'dbCall.js',
      allow: [{
        functionName: "callDb",
        fileName: "test\.js",
      }]
    }
  }
}
