import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

import userDao from "../daos/UserDao";
import IUserCreation from "../interfaces/userCreation";
import IUserLogin from "../interfaces/userLogin";

import errors from "../shared/errors";

const secret = process.env.SECRET;
const expiresIn = process.env.TOKEN_EXPIRATION;

const axios = require("axios").create({
  headers: {
    accept: "application/json",
  },
});

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

  signInWithGitHub() {
    return async (req: Request, res: Response) => {
      axios
        .post(`https://github.com/login/oauth/access_token`, {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code: req.query.code,
        })
        .then((res: any) => res.data["access_token"])
        .then((access_token: string) => {
          axios.defaults.headers.common = {
            Authorization: `Bearer ${access_token}`,
          };

          axios.get("https://api.github.com/user").then(async (r: any) => {
            userDao
              .create({
                name: r.data["name"],
                email: r.data["email"],
                password: "" + r.data["id"],
              })
              .catch((e) => {
                if (e.message == errors.emailInUse)
                  console.log("Already registered");
              });

            const user = await userDao.findByEmail(r.data["email"]);

            if (user) {
              const payload = {
                id: user.id,
              };

              const token = jsonwebtoken.sign(payload, secret as string, {
                expiresIn,
              });

              res.cookie("twdo.token", token);
              res.redirect("http://localhost:3000/today");
            }
          });
        })
        .catch("");
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
      const { email, name } = req.body;

      return userDao
        .updateInfo(userId, email, name)
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
      try {
        const { id } = req.user;
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

    if (bcrypt.compareSync(password, user.password)) return true;

    throw new Error(errors.invalidCredentials);
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
