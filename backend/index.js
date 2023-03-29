const path = require('path');

const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')


connectToMongo();

const app = express()
const port = 5000
app.use(cors())


app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')))

app.use('/api/auth', require('./routes/Auth'))
app.use('/api/notes', require('./routes/Notes'))
app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})




app.listen(port,
    () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })