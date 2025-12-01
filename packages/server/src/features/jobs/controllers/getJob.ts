import type { RequestHandler } from "express";
import { jobs } from "../../../db/jobs.ts";

export const getJob: RequestHandler = async (req, res, next) => {
  const {uuid} = req.params
  res.json(jobs.filter((j) => j.uuid === uuid));
};
