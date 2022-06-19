import { NextFunction, Request, Response } from "express";

import errors from "../shared/errors";
import taskDao from "../daos/TaskDao";

class TaskController {
  create() {
    return (req: Request, res: Response, next: NextFunction) => {
      const data = {
        ...req.body,
        userId: req.user.id,
      };

      return taskDao
        .create(data)
        .then((createdTask: object) => {
          return res.status(201).send({
            task: createdTask,
          });
        })
        .catch((e: any) => {
          if (e.message == errors.emailInUse) {
            return res.status(409).send({
              error: e.message,
            });
          }
          return res.status(500).send({
            error: e.message,
          });
        });
    };
  }

  getAll() {
    return (req: Request, res: Response, next: NextFunction) => {
      return taskDao
        .getAll(req.user.id)
        .then((tasks: object) => {
          return res.status(200).send({
            tasks,
          });
        })
        .catch((e: any) => {
          return res.status(500).send({
            error: e.message,
          });
        });
    };
  }
}

export default new TaskController();
