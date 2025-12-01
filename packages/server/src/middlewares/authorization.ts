import type { RequestHandler } from "express";

export const authorization: RequestHandler = async (req, res, next) => {
  const headers = req.headers;
  // Exercice 1: Il semblerait que le header 'Authorization' soit absent la liste des headers de la requête. Ainsi le serveur renvoie une erreur 400 comme suit

  if (!headers.authorization) {
    return res.status(400).send();
  }

  // Exercice 1: le header 'Authorization' doit avoir une valeur égale à "ubiquid" pour avoir accès au endpoint, ce qui n'est pas le cas.
  if (headers.authorization !== "ubiquid") {
    return res.status(401).send();
  }

  next();
};
