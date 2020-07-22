const {tables,client} = require('../constants')
client.connect()
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
