import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

import userDao from "../daos/UserDao";
import IUserCreation from "../interfaces/userCreation";
import IUserLogin from "../interfaces/userLogin";

import errors from "../shared/errors";

const secret = process.env.SECRET;
const expiresIn = process.env.TOKEN_EXPIRATION;

class UserController {
    register() {
        return (req: Request, res: Response, next: NextFunction) => {
            const data: IUserCreation = req.body;

            return userDao
                .create(data)
                .then((createdUser) => {
                    return res.status(201).send({
                        user: createdUser,
                    });
                })
                .catch((e) => {
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

    signIn() {
        return async (req: Request, res: Response, next: NextFunction) => {
            const data: IUserLogin = req.body;

            try {
                await this.#checkPasswordByEmail(data.email, data.password);

                const user = await userDao.findByEmail(data.email);

                if (user) {
                    const payload = {
                        id: user.id,
                    };

                    const token = jsonwebtoken.sign(payload, secret as string, {
                        expiresIn,
                    });

                    return res.status(200).send({
                        token,
                        user,
                    });
                }
            } catch (e: any) {
                return res.status(400).send({
                    error: e.message,
                });
            }
        };
    }

    delete() {
        return (req: Request, res: Response, next: NextFunction) => {
            const { id } = req.user;
            return userDao
                .delete(id)
                .then(() =>
                    res.status(200).send({
                        message: "Your account has been successfully deleted.",
                    })
                )
                .catch((e) =>
                    res.status(500).send({
                        message: e.message,
                    })
                );
        };
    }

    changeEmail() {
        return (req: Request, res: Response, next: NextFunction) => {
            const { id: userId } = req.user;
            const { email } = req.body;

            return userDao
                .updateEmail(userId, email)
                .then((user) =>
                    res.status(200).send({
                        user,
                    })
                )
                .catch((e) =>
                    res.status(400).send({
                        error: e.message,
                    })
                );
        };
    }

    changePassword() {
        return async (req: Request, res: Response, next: NextFunction) => {
            const { id } = req.user;
            const { oldPassword, newPassword } = req.body;

            try {
                await this.#checkPasswordById(id, oldPassword);

                return userDao.updatePassword(id, newPassword).then((user) =>
                    res.status(200).send({
                        user,
                    })
                );
            } catch (e: any) {
                return res.status(400).send({
                    error: e.message,
                });
            }
        };
    }

    changeName() {
        return async (req: Request, res: Response, next: NextFunction) => {
            const { id } = req.user;
            const { name } = req.body;

            try {
                return userDao.updateName(id, name).then((user) =>
                    res.status(200).send({
                        user,
                    })
                );
            } catch (e: any) {
                return res.status(400).send({
                    error: e.message,
                });
            }
        };
    }

    getLoggedUser() {
        return async (req: Request, res: Response, next: NextFunction) => {
            const { id } = req.user;

            try {
                const user = await userDao.findById(id);
                return res.status(200).send({
                    user,
                });
            } catch (e: any) {
                return res.status(500).send({
                    error: e.message,
                });
            }
        };
    }

    async #checkPasswordByEmail(email: string, password: string) {
        const user = await userDao.findByEmail(email);

        if (!user) {
            throw new Error(errors.invalidCredentials);
        }

        return bcrypt.compareSync(password, user.password)
            ? true
            : new Error(errors.invalidCredentials);
    }

    async #checkPasswordById(id: number, password: string) {
        const user = await userDao.findById(id);

        if (!user) {
            throw new Error(errors.invalidCredentials);
        }

        if (bcrypt.compareSync(password, user.password)) {
            return true;
        } else {
            throw new Error(errors.invalidCredentials);
        }
    }
}

export default new UserController();
