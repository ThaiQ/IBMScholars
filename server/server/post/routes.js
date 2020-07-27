const {pool, app} = require('../constants')
const {postName} = require('./table')

/**
 * Querry everything from post
 */
app.get(`/${postName}/get`, (req, res) => {
    pool.query(`SELECT * FROM ${postName}`, (error, results) => {
        if (error) {
            return res.status(404).send(error);
        }
        return res.status(200).send(results.rows);
    })
  })

  /**
   * add post by its question and description
   */
app.post(`/${postName}/post`, (req, res) => {
    pool.query(`INSERT INTO ${postName} (question, description) VALUES ($1, $2) RETURNING *`, 
    [req.body.question, req.body.description], (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        return res.status(200).send(`A new post has been added: ${results.rows[0]}`);
    })
})

/**
 * delete post
 */
app.post(`/${postName}/delete`, (req, res) => {
    pool.query(`DELETE FROM ${postName} WHERE question = $1`, [req.body.question], (error, results) => {
        if (error) {
            return res.status(404).send(error);
        }
        return res.status(200).send(`Merchant deleted with name: ${req.body.post}`);
      })
})
