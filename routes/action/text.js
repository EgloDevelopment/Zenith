const router = require("express").Router();

const { text } = require("../../functions/text");

router.post("/", async (req, res) => {
    if (!req.body.number) {
        res.status(400).json({ error: "number is required" });
        return;
    }

    try {
        await text({
            country: req.body.country,
            carrier: req.body.carrier,
            number: req.body.number,
            text: req.body.text,
        });

        res.status(200).json({ message: "message was sent" });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
