const router = require("express").Router();
const nytController = require("../controllers/nytController");

router.get("/:name", async (req, res) => {
    playerName = req.params.name
    let response = await nytController.getArticlePlayer(playerName)
    res.json({"data": {response}})
    
})

module.exports = router