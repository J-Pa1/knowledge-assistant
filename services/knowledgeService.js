const getKnowledge = (req, user) => {
  let knowledge = req.app.locals.knowledgeBase[user];
  if (!knowledge) {
    throw new Error(`Knowledge not Found for user:${user}`, {
      status: 404,
    });
  }
  return {
    user: user,
    knowledge: req.app.locals.knowledgeBase[user],
  };
};

const setKnowledge = (req, user, knowledge) => {
  req.app.locals.knowledgeBase[user] = knowledge;
  return {
    user: user,
    knowledge: knowledge,
  };
};

const deleteKnowledge = (req, user) => {
  let knowledge = req.app.locals.knowledgeBase[user];

  if (!knowledge) {
    throw new Error(`Knowledge not Found for user:${user}`, {
      status: 404,
    });
  }
  delete req.app.locals.knowledgeBase[user];
  return {
    user: user,
  };
};

module.exports = {
  getKnowledge,
  setKnowledge,
  deleteKnowledge,
};
