// services/aiService.js

const knowledgeService = require("./knowledgeService");
const axios = require("axios");
const APIKEY = process.env.APIKEY; // mistral api key

const askAi = async (req, user, query) => {
  const userKnowledge = knowledgeService.getKnowledge(req, user).knowledge;
  try {
    const response = await axios.post(
      "https://api.mistral.ai/v1/chat/completions",
      {
        model: "mistral-small-latest", // mistral ai model
        messages: [
          {
            role: "system",
            content: `Use this knowledge base: ${userKnowledge}`,
          }, // providing knowledge base to make query
          { role: "user", content: query }, // query
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${APIKEY}`, // passing mistral AI API key through request
        },
      }
    );
    return {
      response: response?.data,
    };
  } catch (err) {
    throw new Error("Failed to get response from AI", {
      status: 500,
    });
  }
};

module.exports = {
  askAi,
};
