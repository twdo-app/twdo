import { PrismaClient } from "@prisma/client";
import errors from "../shared/errors";

const prisma = new PrismaClient();

class ProjectDao {
  async create(data: any) {
    const { name, userId } = data;
    return await prisma.project.create({
      data: {
        userId,
        name,
        //projectIndex
      },
    });
  }

  async getAll(userId: number) {}

  async delete(data: any) {}

  async update(data: any) {}
}

export default new ProjectDao();
