const aiService = require("../services/aiService");

const askAi = async (req, res) => {
  try {
    const result = await aiService.askAi(req, req.body.user, req.body.query);
    res.status = 200;
    res.send({
      response: result?.response?.choices[0]?.message.content, // returning response from Mistral AI
    });
  } catch (err) {
    res.status(err.status || 500);
    res.send({
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = {
  askAi,
};
