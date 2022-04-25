const express = require("express");
const router = express.Router();
//router permite criar rotas em diferentes arquivos e depois levar para o app.js

const Checklist = require("../models/checklist");

router.get("/", async (req, res) => {
  try {
    let checklists = await Checklist.find({});
    console.log(`${checklists.length} checklists were found`);
    res.status(200).json(checklists);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  let { name } = req.body;
  try {
    let checklist = await Checklist.create({ name });
    console.log("Checklist was successfully created");
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).json(checklist);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`PUT ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`DELETE ID: ${req.params.id}`);
});

module.exports = router;
