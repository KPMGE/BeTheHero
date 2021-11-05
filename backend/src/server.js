const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use(express.json());

app.use(routes);

const port = 3333;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
