const express = require("express");
const router = express.Router();
const BlogController = require("./../controllers/BlogController");

router.get("/", BlogController.index);
router.post("/", BlogController.store);
router.get("/create", BlogController.create);
router.get("/:id", BlogController.show)
router.delete("/:id", BlogController.destory);

module.exports = router;