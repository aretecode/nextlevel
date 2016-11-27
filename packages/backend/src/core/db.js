import PouchDB from 'pouchdb'

// db
// https://github.com/dscape/nano
// https://github.com/flatiron/cradle
// https://github.com/kowsik/memcouchd
// https://github.com/pouchdb/pouchdb-server
// https://github.com/juliangruber/memdb
// https://github.com/Level/memdown
// https://github.com/webpack/memory-fs
// https://www.npmjs.com/package/sqleye
//
// chosen
// https://pouchdb.com/adapters.html#pouchdb_in_node_js
// https://pouchdb.com/guides/async-code.html

// configure couchdb
export default function(config) {
  return new PouchDB('myDB', {db: require('memdown')})
}
