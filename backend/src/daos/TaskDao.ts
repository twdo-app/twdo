import { PrismaClient } from "@prisma/client";
import ITaskCreation from "../interfaces/taskCreation";
import errors from "../shared/errors";

const prisma = new PrismaClient();

class TaskDao {
  async create(data: ITaskCreation) {
    const { userId, description, dueDate, date, dateIndex, projectIndex } =
      data;

    try {
      return await prisma.task.upschrome;
      ert({
        data: {
          userId,
          description,
          dueDate,
          date,
          dateIndex,
          projectIndex,
        },
      });
    } catch (e) {
      throw new Error(errors.couldNotCreateTask);
    }
  }
}

export default new TaskDao();
