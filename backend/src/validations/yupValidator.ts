import { Request, Response, NextFunction } from "express";
import { BaseSchema } from "yup";
import errors from "../shared/errors";

const yupValidator =
    (schema: BaseSchema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = {
                user: req.user,
                params: req.params,
                body: req.body,
            };
            await schema.validate(data);
            next();
        } catch (e) {
            return res.status(400).send({
                message: errors.yupValidationError,
            });
        }
    };

export default yupValidator;
