// import dependencies and initialize express
const path = require('path');
const bodyParser = require('body-parser');
const healthRoutes = require('./controllers/health-route');
const swaggerRoutes = require('./config/swagger-route');
const {app} = require('./constants')

//Import routes
require('./merchants/routes') //Example merchants routes
require('./mp3/routes')

// enable parsing of http request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes and api calls
app.use('/health', healthRoutes);
app.use('/swagger', swaggerRoutes);

// default path to serve up index.html (single page application)
app.all('', (req, res) => {
  res.status(200).send('UP');
});

// start node server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App UI available http://localhost:${port}`);
  console.log(`Swagger UI available http://localhost:${port}/swagger/api-docs`);
});

module.exports = {
  app,
};
