const { pool, app } = require('../constants')
const { commentName } = require('./table')

/**
 * req
 * if req.body.question is visible, querry all comments of that question
 * else querry everything
 */
app.get(`/${commentName}/get`, (req, res) => {
    req.body.question ?
        pool.query(`SELECT * FROM ${commentName} WHERE question = $1`, [req.body.question], (error, results) => {
            if (error) {
                return res.status(404).send(error);
            }
            return res.status(200).send(results.rows);
        }) :
        pool.query(`SELECT * FROM ${commentName}`, (error, results) => {
            if (error) {
                return res.status(404).send(error);
            }
            return res.status(200).send(results.rows);
        })
})

/**
 * add post by its question and reply
 */
app.post(`/${commentName}/post`, (req, res) => {
    pool.query(`INSERT INTO ${commentName} (question, reply, name) VALUES ($1, $2, $3) RETURNING *`,
        [req.body.question, req.body.reply, req.body.name], (error, results) => {
            if (error) {
                return res.status(500).send(error);
            }
            return res.status(200).send(`A new comment has been added: ${results.rows[0]}`);
        })
})

/**
 * req
 * if req.body.question is visible, delete every comments relate to it
 * else delete req.body.reply
 */
app.post(`/${commentName}/delete`, (req, res) => {
    req.body.question ?
        pool.query(`DELETE FROM ${commentName} WHERE question = $1`, [req.body.question], (error, results) => {
            if (error) {
                return res.status(404).send(error);
            }
            return res.status(200).send(`Comments deleted with question: ${req.body.question}`);
        }) :
        pool.query(`DELETE FROM ${commentName} WHERE reply = $1 AND name = $2`, [req.body.reply, req.body.name], (error, results) => {
            if (error) {
                return res.status(404).send(error);
            }
            return res.status(200).send(`Comment deleted with value: ${req.body.reply}`);
        })
})
