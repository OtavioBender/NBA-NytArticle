const express       = require('express');
const axios         = require('axios');
const cors = require("cors");

const app = express()
PORT = 3000

app.use(express.static(__dirname + '/public'))

app.use(cors())

app.get('/', async (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})