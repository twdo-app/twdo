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

  delete() {
    return (req: Request, res: Response, next: NextFunction) => {
      const data = {
        id: parseInt(req.params.id),
        userId: req.user.id,
      };
      return taskDao
        .delete(data)
        .then((deletedTask: object) => {
          return res.status(200).send({
            task: deletedTask,
          });
        })
        .catch((e: any) => {
          return res.status(500).send({
            error: e.message,
          });
        });
    };
  }

  update() {
    return (req: Request, res: Response, next: NextFunction) => {
      const data = {
        ...req.body,
        id: parseInt(req.params.id),
        userId: req.user.id,
      };
      return taskDao
        .update(data)
        .then((updatedTask: object) => {
          return res.status(200).send({
            task: updatedTask,
          });
        })
        .catch((e: any) => {
          if (e.message == errors.couldNotFindTask) {
            return res.status(404).send({
              error: e.message,
            });
          }
          return res.status(500).send({
            error: e.message,
          });
        });
    };
  }
}

export default new TaskController();
