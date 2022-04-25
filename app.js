const express = require("express");

const app = express();
//todos os métodos do servidor estarão dentro de app

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
