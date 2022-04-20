const express = require("express");
const router = express.Router();
const userControllr = require("../controllers/user.controller");

router.get("/", userControllr.findAll);
router.post("/", userControllr.create);
router.get("/:id", userControllr.findOne);
router.put("/:id", userControllr.update);
router.delete("/:id", userControllr.remove);
module.exports = router;