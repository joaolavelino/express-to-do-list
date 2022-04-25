const express = require("express");
const router = express.Router();
//router permite criar rotas em diferentes arquivos e depois levar para o app.js

router.get("/", (req, res) => {
  console.log("hello from checklists");
  res.send();
});

module.exports = router;
