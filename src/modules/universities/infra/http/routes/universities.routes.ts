import express from 'express';

const universitiesRoutes = express.Router();

universitiesRoutes.post("/creatuniversity", (request, response) => {
  const {codeCountry, url, name, country, domains, state } = request.body;

  return response.status(201).json({msg: "teste"})
})


universitiesRoutes.get("/universities", (request, response) => {
  // const {codeCountry, url, name, country, domains, state } = request.body;

  return response.status(201).json({msg: "teste"})
})

export { universitiesRoutes };