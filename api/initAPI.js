const {client} = require('./constants')

const {merchantTable, merchantName} = require('./merchants/table')

//Add tables into this array
const tables = [merchantTable]
//Add name of tables into this array
const tableNames = [merchantName]

//OPTION Choose ADD or DELETE to add/delete tables
const option = 'ADD'

client.connect()

if (option==='DELETE'){
    // Enable this block to delete tables in deleteTables
    tableNames.map(name => {
        client.query(`DROP TABLE ${name};`, (err, res) => {
            if (err) {
                console.error(err);
                client.end();
                return
            }
            console.log('Done');
            client.end();
        });
    })
}
else if (option==='ADD') {
    //Enable this block to add to table
    tables.map(table => {
        client.query(table, (err, res) => {
            if (err) {
                console.error(err);
                return
            }
            console.log('Done');
            client.end();
        });
    })
}