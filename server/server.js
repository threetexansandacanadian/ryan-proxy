const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('I am a callback!');
})

app.listen(port, console.log('Server ready on port:', port));