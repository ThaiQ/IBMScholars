const {pool, app} = require('../constants')
const {rewardName} = require('./table')

app.get('/getItems', (req, res) => {
    pool.query(`SELECT * FROM ${rewardName}`, (error, result) => {
        if (error) {
            return res.status(500).send(error);
        }
        return res.status(200).send(result.rows);
    })
})

app.post('/addItem', (req, res) => {
    pool.query(`INSERT INTO ${rewardName} (item, price, id) VALUES ($1, $2, $3) RETURNING *`,
        [req.body.item, req.body.price, req.body.id], (error, result) => {
            if (error) {
                return res.status(500).send(error);
            }
            return res.status(200).send(`The item has been added: ${result.rows[0]}`);        
        })
})

app.post('/deleteItem', (req, res) => {
    pool.query(`DELETE FROM ${rewardName} WHERE item = $1 AND id = $2`, 
        [req.body.item, req.body.id], (error, result) => {
            if (error) {
                return res.status(500).send(error);
            }
            return res.status(200).send(`Reward deleted with item: ${req.body.id}`);
        })
})