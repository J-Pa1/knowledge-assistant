const knowledgeService = require("../services/knowledgeService");

const getKnowledge = (req, res) => {
  try {
    let result = knowledgeService.getKnowledge(req, req.params.user);
    res.status(200);
    res.send(result);
  } catch (err) {
    res.status(err.status || 500);
    res.send({
      message: err.message || "Internal Server Error",
    });
  }
};

const setKnowledge = (req, res) => {
  try {
    let result = knowledgeService.setKnowledge(
      req,
      req.params.user,
      req.body.knowledge
    );
    res.status(200);
    res.send({
      message: `Knowledge updated for user:${result.user}`,
    });
  } catch (err) {
    res.status(err.status || 500);
    res.send({
      message: err.message || "Internal Server Error",
    });
  }
};

const deleteKnowledge = (req, res) => {
  try {
    let result = knowledgeService.deleteKnowledge(req, req.params.user);
    res.status(200);
    res.send({
      message: `Knowledge deleted for user:${result.user}`,
    });
  } catch (err) {
    res.status(err.status || 500);
    res.send({
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = {
  getKnowledge,
  setKnowledge,
  deleteKnowledge,
};
