import { NextFunction, Request, Response } from "express";
import { send } from "process";

import projectDao from "../daos/ProjectDao";

class TaskController {
  create() {
    return (req: Request, res: Response, next: NextFunction) => {
      const data = {
        ...req.body,
        userId: req.user.id,
      };

      return projectDao
        .create(data)
        .then((createdProject: object) => {
          return res.status(201).send({
            project: createdProject,
          });
        })
        .catch((e: any) => {
          return res.status(500).send({
            error: e.message,
          });
        });
    };
  }

  getAll() {
    return (req: Request, res: Response, next: NextFunction) => {
      return projectDao
        .getAll(req.user.id)
        .then((projects) => {
          return res.status(201).send({
            projects: projects,
          });
        })
        .catch((e) => {
          return res.status(500).send({
            error: e.message,
          });
        });
    };
  }

  async delete() {}

  async update() {}
}

export default new TaskController();
