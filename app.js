const express = require("express");
const { process_params } = require("express/lib/router");

const app = express();
//todos os métodos do servidor estarão dentro de app

app.use(express.json());
//esse middleware verifica se tem um JSON disponível no body da requisiçao

//criar um middleware
const log = (req, res, next) => {
  console.log(req.body);
  console.log(`Requested on: ${Date.now()}`);
  next();
  //next = passa pro prox middleware
};
app.use(log);

//first request routes
app.get("/", (req, res) => {
  res.send(
    "<h1>My to-do-list</h1><h2>Created with NodeJS + Express + MongoDB<h2/>"
  );
});

app.get("/json", (req, res) => {
  res.json({ title: "Do Something", done: false });
});

//set the port for the server
app.listen(3000, () => {
  console.log("The server is now started");
});
