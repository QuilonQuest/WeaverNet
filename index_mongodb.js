
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const {startDatabase} = require('./database/mongo');
const {insertAd, getAds} = require('./database/ads');

// ... leave the app definition and the middleware config untouched ...

// defining the Express app
const app = express();

// replace the endpoint responsible for the GET requests
app.get('/', async (req, res) => {
  res.send(await getAds());
});

// start the in-memory MongoDB instance
startDatabase().then(async () => {
  await insertAd({title: 'Hello, now from the in-memory database!'});

  // start the server
  app.listen(3001, async () => {
    console.log('listening on port 3001');
  });
});
