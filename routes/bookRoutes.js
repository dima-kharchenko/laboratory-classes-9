const express = require("express");
const bookController = require("../controllers/bookControllers");
const router = express.Router();

router.get("/", bookController.getBooks);
router.post("/", bookController.addBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
