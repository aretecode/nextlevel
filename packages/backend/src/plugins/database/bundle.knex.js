// @NOTE:
// @TODO:
// have to comment this out unless the dependency is installed
// so it can shake it up
// could move the db config to plugins as well easily
// remove this if you don't want to setup a swappable db
//
///
///
// import Knex from 'knex'
// import url from 'url'
//
// export const bootstrap = (ext, di) => {
//   ext.point('app.db.knex').extend({
//     id: 'knex',
//     config: function(config) {
//       var connection, dbConfig, pass, provider, ref, user
//
//       dbConfig = url.parse(config.microservice1.database.url)
//       connection = {
//         charset: 'utf8'
//       }
//
//       switch (dbConfig.protocol) {
//       case 'postgres:':
//         provider = 'pg'
//         ref = dbConfig.auth.split(':'), user = ref[0], pass = ref[1]
//         connection.host = dbConfig.hostname
//         connection.user = user
//         connection.password = pass
//         connection.database = dbConfig.path.substr(1)
//         connection.port = dbConfig.port
//         break
//       case 'sqlite:':
//         provider = 'sqlite3'
//         connection.filename = dbConfig.path
//       }
//
//       return Knex({
//         client: provider,
//         connection: connection,
//       })
//     },
//   })
// }
