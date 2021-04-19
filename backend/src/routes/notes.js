const { Router } = require("express");
const router = Router();

router
  .route("/")
  .get((req, res) => res.json({ message: [] }))
  .post((req, res) => res.json({ message: "Note saved" }));

router
  .route("/:id")
  .get((req, res) => res.json({ title: "This is a note title" }))
  .put((req, res) => res.json({ message: "Note updated" }))
  .delete((req, res) => res.json({ message: "Note deleted" }));

module.exports = router;
