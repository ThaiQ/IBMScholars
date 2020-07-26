const { Pool, Client } = require('pg')
const connectionString = 'postgres://shtuunao:mtYbRa79klkaCaOO_wiI5wLG1FsjmOIP@hanno.db.elephantsql.com:5432/shtuunao'
const base_URL = process.env.NODE_ENV === 'production' ?
'https://ibm-goodtechscholars.mybluemix.net' : 'http://localhost:3000'

//init pstgresSQL
const pool = new Pool({
  connectionString: connectionString,
})
const client = new Client({
    connectionString: connectionString,
})

/**
 * INIT TABLE HERE!!!!
 * Don't forget to run 'npm run add-tables'
 * or 'npm run remove-tables'
 */
const {merchantTable, merchantName} = require('./merchants/table')
const {rewardTable, rewardName} = require('./rewards/table')
//Add tables into this array
const tables = [merchantTable, rewardTable]
//Add name of tables into this array
const tableNames = [merchantName, rewardName]

//Init express
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
    base_URL,
    tables,
    tableNames
  };
  