const express = require("express");
const checklistRouter = require("./src/routes/checklist");
const rootRouter = require("./src/routes/index");

require("./config/database");
const path = require("path");
//essa biblioteca permite o express achar o caminho das views

const app = express();
//todos os métodos do servidor estarão dentro de app

app.use(express.json());
//esse middleware verifica se tem um JSON disponível no body da requisiçao

app.set("views", path.join(__dirname, "src/views"));
//aqui estou dizendo pro app que o caminho para as views é o caminho até aqui, + o caminho até a pasta das views
app.set("view engine", "ejs");
//dizendo pro app que as views serao feitas usando EJS

app.use("/checklists", checklistRouter);
//esse primeiro argumento coloca um endereço padrao pra todas as rotas dentro desse router... entao as rotas dentro dele nao precisarão ter /checklists no seu caminho.
app.use("/", rootRouter);

//set the port for the server
app.listen(3000, () => {
  console.log("The server is now started");
});
