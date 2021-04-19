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
  return response.json({ message: "Olá IURI!!!" })
})

app.post("/users", (request, response) => {
  return response.json({ message: "Usuário salvo com sucesso!" })
})

app.listen(3333, () => console.log("Server running in port 3333"));