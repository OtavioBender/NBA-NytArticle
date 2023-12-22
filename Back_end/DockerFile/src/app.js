const express    = require('express');
const nbaRoutes = require("./routes/nbaRoute");
const cors = require("cors");
require('dotenv').config();


const app = express();
const PORT = 3001;

app.use(cors())

app.use("/api/nba", nbaRoutes)



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})