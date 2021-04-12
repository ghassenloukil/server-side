const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chalk = require('chalk');

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
// app.use(express.static(__dirname + '/../client/ParkiZone'))

app.get('/', (req, res) =>{
    res.send('hello pixa');
})

app.listen(PORT, () => {
    
    console.log(`${chalk.green(`Server started on http://localhost:${PORT} ✔`)}`);
  });