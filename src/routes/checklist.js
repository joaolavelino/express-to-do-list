const express = require("express");
const router = express.Router();
//router permite criar rotas em diferentes arquivos e depois levar para o app.js

router.get("/", (req, res) => {
  console.log("hello from checklists");
  res.send();
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
});

module.exports = router;
