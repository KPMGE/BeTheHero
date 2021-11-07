const app = require('./app');

const port = 3333;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
