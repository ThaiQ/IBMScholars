const { Pool, Client } = require('pg')
const connectionString = 'postgres://shtuunao:mtYbRa79klkaCaOO_wiI5wLG1FsjmOIP@hanno.db.elephantsql.com:5432/shtuunao'
const base_URL = process.env.NODE_ENV === 'production' ?
'https://ibm-goodtechscholars.mybluemix.net' : 'http://localhost:3000'

const pool = new Pool({
  connectionString: connectionString,
})
const client = new Client({
    connectionString: connectionString,
  })

const express = require('express')
const app = express()
app.use(express.json())
const port = 3001
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

module.exports = {
    pool,
    client,
    express,
    app,
    port,
    base_URL
  };