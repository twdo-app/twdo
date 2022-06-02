import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import IDecodedPayload from "../interfaces/decodedPayload";

import errors from "../shared/errors";

const _ensureTokenPresence = (req: Request) => {
    try {
        const bearerAuthorization = req.headers.authorization;

        const token =
            bearerAuthorization && bearerAuthorization.split(" ").pop();

        if (!token) {
            throw new Error(errors.requestWithoutToken);
        }

        return token;
    } catch (e) {
        throw new Error(errors.requestWithoutToken);
    }
};

class UserAuth {
    static verifyJWT() {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                const token: string | undefined = _ensureTokenPresence(req);

                const decoded = jsonwebtoken.verify(
                    token as string,
                    process.env.SECRET as string
                ) as IDecodedPayload;
                req.user = { id: decoded.id };

                next();
            } catch (e: any) {
                res.status(401).send({
                    message: e.message,
                });
            }
        };
    }
}

export default UserAuth;
