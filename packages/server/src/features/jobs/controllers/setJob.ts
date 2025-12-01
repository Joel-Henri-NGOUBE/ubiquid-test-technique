import type { RequestHandler } from "express";
import { jobs } from "../../../db/jobs.ts";

export const setJob: RequestHandler = async (req, res, next) => {
  try {
    const { uuid } = req.params

    const body: typeof jobs[0]  = req.body;

    // Retrouver l'élément de la base de données correspondant à l'élément à modifier
    const jobToSet = jobs.filter((j) => j.uuid === uuid)[0]

    if(jobToSet){
        // Récupérer l'id de cet élément
        const jobIndex = jobs.indexOf(jobToSet)
        // Modifier les éléments qui sont ciblés par une modification
        if(body.salary){
            jobToSet.salary = body.salary
        }
        if(body.title){
            jobToSet.title = body.title
        }
        if(body.category){
            jobToSet.category = body.category
        }
        if(body.type){
            jobToSet.type = body.type
        }
        // Modifier la base de données en fonction du contenu reçu.
        jobs.splice(jobIndex, 1, jobToSet)
    }

    res.status(200).json(jobToSet);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({
        success: false,
        message: e.message,
      });
    }

    res.status(500).send();
  }
};
