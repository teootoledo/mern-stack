const { Router } = require("express");
const router = Router();

router.route("/").get((req, res) => res.send("GET - Users routes"));

module.exports = router;
