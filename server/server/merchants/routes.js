const {pool, app} = require('../constants')
const {merchantName} = require('./table')

app.get('/get', (req, res) => {
    pool.query(`SELECT * FROM ${merchantName} ORDER BY id ASC`, (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        return res.status(200).send(results.rows);
    })
  })

app.post('/createMerchants', (req, res) => {
    pool.query(`INSERT INTO ${merchantName} (name, email) VALUES ($1, $2) RETURNING *`, 
    [req.body.name, req.body.email], (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        return res.status(200).send(`A new merchant has been added added: ${results.rows[0]}`);
    })
})

app.post('/deleteMerchant', (req, res) => {
    pool.query(`DELETE FROM ${merchantName} WHERE name = $1`, [req.body.name], (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        return res.status(200).send(`Merchant deleted with name: ${req.body.name}`);
      })
})
