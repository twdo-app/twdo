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

  async delete(data: any) {}

  async update(data: any) {}
}

export default new ProjectDao();
