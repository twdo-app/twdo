import { PrismaClient } from "@prisma/client";
import errors from "../shared/errors";

const prisma = new PrismaClient();

class ProjectDao {
  async create(data: any) {
    try {
      const { name, userId, emoji, index } = data;
      return await prisma.project.create({
        data: {
          userId,
          name,
          emoji,
          index: index || 1,
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
      });
    } catch (e) {
      throw new Error(errors.genericError);
    }
  }

  async delete(data: any) {
    const { id, userId } = data;
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
    const { id, userId, name, emoji, index } = data;

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
          emoji: emoji,
          index: index || 1,
        },
      });
    } catch (e) {
      throw new Error(errors.genericError);
    }
  }
}

export default new ProjectDao();
