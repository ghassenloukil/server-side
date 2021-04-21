const express = require('express');
const app = express();
const port = 3000;
const db = require('./database/config.js');
// const routes = require('./routers/index.js');
const router = require('./routers/user')
var cors = require('cors')
// const cookieParser = require('cookie-parser')
app.use(cors())
// app.use(cookieParser())
app.use(express.json());
// app.use(express.static(__dirname + '/../client/dist/server'));


// app.use('/user', routes.user);
// app.use('/session', routes.session);
app.use("/api/ParkiZone", router)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
