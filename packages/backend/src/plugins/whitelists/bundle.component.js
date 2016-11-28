export const bootstrap = (ext, di, db) => {
  var db = di.container.db
  ext.point('app.whitelist').extend({
    id: 'whitelist',

    // @TODO:
    // - [ ] DI interface (flow)
    // - [ ] Route interface (flow)
    add: async function(req, res): ResponseHandler {
      if (!(req.body.id && req.params.list)) return res.sendStatus(422)
      const list = req.params.list
      const id = req.body.id.trim()

      const listData = {
        _id: new Date().toISOString() + id,
        list: list,
        completed: false,
      }

      // read first, to make sure it isn't already in db
      const {rows} = await db.allDocs({include_docs: true, descending: true}).catch(e => {
        // @NOTE: should use a notifier and/or store to file
        console.log(e)
        return res.status(500).json({
          message: `error reading from db`,
        })
      })
      if (rows.length !== 0) {
        return res.status(422).json({
          message: `list: ${list} with value/id: ${id} was already in the db`,
        })
      }

      await db.put(listData)
      res.status(201).json({
        message: `added ${id} to whitelist`,
      })
    },

    // @TODO:
    // - [ ] use queries
    // - [ ] catch
    // - [ ] validate (check if it had any) data, send err
    fetch: async function(req, res): ResponseHandler {
      const {rows} = await db.allDocs({include_docs: true, descending: true})
      res.status(200).json({
        list: rows[0].doc.list,
      })
    },

  })
}
