import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

import IUserCreation from "../interfaces/userCreation";
import IUserLogin from "../interfaces/userLogin";

import errors from "../shared/errors";

const prisma = new PrismaClient();
class UserDao {
    async create(data: IUserCreation) {
        const { name, email, password } = data;

        if (await this.findByEmail(email)) {
            throw new Error(errors.emailInUse);
        }

        const salt = bcrypt.genSaltSync(10);

        const hashedPassword = bcrypt.hashSync(password, salt);

        try {
            return await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    name,
                },
            });
        } catch (e) {
            throw new Error(errors.couldNotCreateUser);
        }
    }

    async findByEmail(email: string) {
        try {
            return await prisma.user.findUnique({
                where: {
                    email,
                },
            });
        } catch (e) {
            throw new Error(errors.couldNotFindUserByEmail);
        }
    }

    async findById(id: number) {
        try {
            return await prisma.user.findUnique({
                where: {
                    id,
                },
            });
        } catch (e) {
            throw new Error(errors.genericError);
        }
    }

    async delete(id: number) {
        try {
            await prisma.task.deleteMany({
                where: { userId: id },
            });
            await prisma.task.deleteMany({
                where: { userId: id },
            });
            await prisma.user.delete({
                where: { id },
            });
            return true;
        } catch (e) {
            throw new Error(errors.couldNotDeleteAccount);
        }
    }

    async updateInfo(id: number, email: string, name: string) {
        try {
            return await prisma.user.update({
                where: {
                    id,
                },
                data: {
                    email,
                    name,
                },
            });
        } catch (e) {
            throw new Error(errors.couldNotUpdateEmail);
        }
    }
    async updatePassword(id: number, password: string) {
        const salt = bcrypt.genSaltSync(10);

        const hashedPassword = bcrypt.hashSync(password, salt);

        try {
            return await prisma.user.update({
                where: {
                    id,
                },
                data: {
                    password: hashedPassword,
                },
            });
        } catch (e) {
            throw new Error(errors.couldNotUpdateEmail);
        }
    }
    async updateName(id: number, name: string) {
        try {
            return await prisma.user.update({
                where: {
                    id,
                },
                data: {
                    name,
                },
            });
        } catch (e) {
            throw new Error(errors.couldNotUpdateName);
        }
    }
}

export default new UserDao();
