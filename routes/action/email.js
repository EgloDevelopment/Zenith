const router = require("express").Router();

const { email } = require("../../functions/email");

router.post("/", async (req, res) => {
    if (!req.body.email) {
        res.status(400).json({ error: "email is required" });
        return;
    }

    try {
        await email({
            email: req.body.email,
            subject: req.body.subject,
            html: req.body.html,
        });

        res.status(200).json({ message: "email was sent" });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
