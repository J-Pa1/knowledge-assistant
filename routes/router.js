const express = require("express");
const knowledgeRoutes = require("./knowledgeRoutes");
const aiRoutes = require("./aiRoutes");

const router = express.Router();
router.use("/knowledge", knowledgeRoutes);
router.use("/ai", aiRoutes);

module.exports = router;
