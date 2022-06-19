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
          isCompleted: false,
        },
      });
    } catch (e) {
      throw new Error(errors.couldNotCreateTask);
    }
  }
}

export default new TaskDao();
