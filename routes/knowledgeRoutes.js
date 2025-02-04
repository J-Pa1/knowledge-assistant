const express = require("express");
const {
  getKnowledge,
  setKnowledge,
  deleteKnowledge,
} = require("../controllers/knowledgeController");

const router = express.Router();
router.get("/:user", getKnowledge);
router.post("/:user", setKnowledge);
router.delete("/:user", deleteKnowledge);

module.exports = router;
