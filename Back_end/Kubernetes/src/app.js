const express    = require('express');
const nytRoutes = require("./routes/nytRoute");
const cors = require("cors");
require('dotenv').config();


const app = express();
const PORT = 3002;

app.use(cors())

app.use("/api/nyt", nytRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

