require("dotenv").config();

const express = require("express");
const router = require("./routes/router");
const PORT = process.env.PORT || 8080;

const app = express();
app.locals.knowledgeBase = {};

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
