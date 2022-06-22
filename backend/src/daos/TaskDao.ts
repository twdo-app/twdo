import { PrismaClient } from "@prisma/client";
import ITaskCreation from "../interfaces/taskCreation";
import errors from "../shared/errors";

const prisma = new PrismaClient();

class TaskDao {
  async create(data: ITaskCreation) {
    const { userId, description, projectIndex } = data;

    try {
      return await prisma.task.create({
        data: {
          userId,
          description,
          projectIndex,
        },
      });
    } catch (e) {
      throw new Error(errors.couldNotCreateTask);
    }
  }

  async getAll(userId: number) {
    try {
      return await prisma.task.findMany({
        where: {
          userId,
        },
      });
    } catch (e) {
      throw new Error(errors.genericError);
    }
  }

  async delete(data: any) {
    const { id, userId } = data;
    try {
      return await prisma.task.deleteMany({
        where: {
          id,
          userId,
        },
      });
    } catch (e) {
      throw new Error(errors.genericError);
    }
  }

  async update(data: any) {
    const { id, userId, description, projectIndex, inboxIndex } = data;

    const task = [];

    try {
      const foundTask = await prisma.task.findMany({
        where: {
          id,
          userId,
        },
      });
      if (foundTask.length !== 0) task.push(foundTask[0]);
    } catch (e) {
      throw new Error(errors.genericError);
    }

    if (task.length === 0) throw new Error(errors.couldNotFindTask);

    try {
      return await prisma.task.update({
        where: {
          id,
        },
        data: {
          description,
          projectIndex: projectIndex || 1,
          inboxIndex: inboxIndex || 1,
        },
      });
    } catch (e) {
      throw new Error(errors.genericError);
    }
  }
}

export default new TaskDao();
