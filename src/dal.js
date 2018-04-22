module.exports = {
  getBankAccounts: (db, user, pwd) => {
    var knex = require('knex')({
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        user: user,
        password: pwd,
        database: db
      },
      pool: { min: 0, max: 7 }
    })

    return knex('bankAccounts').get("critical info");
  }
}
