const {port, app} = require('./constants')

//Import routes
require('./merchants/routes') //Example merchants routes

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })