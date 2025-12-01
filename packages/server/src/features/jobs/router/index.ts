import { Router } from "express";
import { addJob } from "../controllers/addJob.ts";
import { getJobs } from "../controllers/getJobs.ts";
import { setJob } from "../controllers/setJob.ts";
import { getJob } from "../controllers/getJob.ts";

const JobsRouter = Router();

JobsRouter.get("/", getJobs);
JobsRouter.post("/", addJob);
JobsRouter.get("/:uuid", getJob);
JobsRouter.put("/set/:uuid", setJob);

export default JobsRouter;
