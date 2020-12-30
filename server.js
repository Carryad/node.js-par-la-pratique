const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")


function randomNumber(min,max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const nodeEnvironment = 'dev';
const randomPort = randomNumber(3000,4000);

app.get('/ping', (req, res) => {
  res.status(200);
  res.send('pong');
});

app.listen(randomPort, () => {
  console.log(`listening on port ${randomPort} in ${nodeEnvironment} node`);
});