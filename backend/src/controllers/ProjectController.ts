import { NextFunction, Request, Response } from "express";

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

  async getAll() {}

  async delete() {}

  async update() {}
}

export default new TaskController();
