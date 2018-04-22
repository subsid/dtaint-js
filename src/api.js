app.get("/bank-account", (req, res) => {
  var [db, user, pwd] = getDbInfo(req)

  Dal.getBankAccounts(db, user, pwd)
});
