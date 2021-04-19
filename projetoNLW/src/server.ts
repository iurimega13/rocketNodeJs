import express, { request, response } from "express";


const app = express();

/**
 * GET => Buscas
 * POST => Criação
 * PUT => Alteração
 * DELETE => Deletar
 * PATCH = Alterar informação especifica
 */

app.get("/", (request, response) => {
  return response.send("Olá IURI!!!")
})

app.listen(3333, () => console.log("Server running in port 3333"));