const connectToMongo = require('./db');
const path = require('path');
var cors = require('cors');
connectToMongo();

const express = require('express')
const app = express()
const port = 8080
 
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../notenest/build')))

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../notenest/build/index.html'))
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
}) 