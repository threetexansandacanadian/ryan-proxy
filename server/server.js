const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send();
})

app.listen(port, console.log('Server ready on port:', port));