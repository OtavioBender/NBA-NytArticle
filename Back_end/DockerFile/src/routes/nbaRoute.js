const router = require("express").Router();
const nbaController = require("../controllers/nbaController");

router.get("/getPlayerName/:name", async (req, res) => {
    playerName = req.params.name
    let response = await nbaController.getPlayerByName(playerName)
    res.json({"data": {response}})
    
})

module.exports = router