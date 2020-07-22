const {tableNames,client} = require('../constants')
client.connect()
tableNames.map(name => {
    client.query(`DROP TABLE ${name};`, (err, res) => {
        if (err) {
            console.error(err);
            return
        }
        console.log('Done');
        client.end();
    });
})
