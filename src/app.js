const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const setupServer = () => {
  const app = express();
  app.listen(3000);
  app.use(cors());
  app.set('port', 8080 || 3000);
  return app;
}

setupServer()
