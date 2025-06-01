const express = require("express");
const authorController = require("../controllers/authorControllers");
const router = express.Router();

router.get("/", authorController.getAuthors);
router.put("/:id", authorController.updateAuthor);

module.exports = router;
