import { PrismaClient } from "@prisma/client";
import errors from "../shared/errors";

const prisma = new PrismaClient();

class ProjectDao {
  async create(data: any) {
    try {
      const { name, userId, emoji } = data;
      return await prisma.project.create({
        data: {
          userId,
          name,
          emoji,
        },
      });
    } catch (e) {
      throw new Error(errors.genericError);
    }
  }

  async getAll(userId: number) {
    try {
      return await prisma.project.findMany({
        where: {
          userId,
        },
        include: {
          tasks: true,
        },
      });
    } catch (e) {
      throw new Error(errors.genericError);
    }
  }

  async delete(data: any) {
    const { id, userId } = data;
    await prisma.task.deleteMany({
      where: {
        projectId: id,
      },
    });

    try {
      return await prisma.project.deleteMany({
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
    const { id, userId, name, emoji } = data;

    const project = [];

    try {
      const foundProject = await prisma.project.findMany({
        where: {
          id,
          userId,
        },
      });
      if (foundProject.length !== 0) project.push(foundProject[0]);
    } catch (e) {
      throw new Error(errors.genericError);
    }

    if (project.length === 0) throw new Error(errors.couldNotFindProject);

    try {
      return await prisma.project.update({
        where: {
          id,
        },
        data: {
          name,
          emoji,
        },
      });
    } catch (e) {
      throw new Error(errors.genericError);
    }
  }
}

export default new ProjectDao();
