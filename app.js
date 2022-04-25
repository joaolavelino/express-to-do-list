const express = require("express");
const checklistRouter = require("./src/routes/checklist");
require("./config/database");

const app = express();
//todos os métodos do servidor estarão dentro de app

app.use(express.json());
//esse middleware verifica se tem um JSON disponível no body da requisiçao

app.use("/checklists", checklistRouter);
//esse primeiro argumento coloca um endereço padrao pra todas as rotas dentro desse router... entao as rotas dentro dele nao precisarão ter /checklists no seu caminho.

//set the port for the server
app.listen(3000, () => {
  console.log("The server is now started");
});
