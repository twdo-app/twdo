import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import IDecodedPayload from "../interfaces/decodedPayload";

import errors from "../shared/errors";

const _ensureTokenPresence = (req: Request) => {
    const bearerAuthorization = req.headers.authorization;

    const token = bearerAuthorization && bearerAuthorization.split(" ").pop();

    return token ? token : null;
};

class UserAuth {
    static verifyJWT() {
        return (req: Request, res: Response, next: NextFunction) => {
            const token = _ensureTokenPresence(req);

            if (!token) {
                const err = new Error();
                res.status(401).send({
                    message: errors.requestWithoutToken,
                });
                return next();
            }

            try {
                const decoded = jsonwebtoken.verify(
                    token,
                    process.env.SECRET as string
                ) as IDecodedPayload;
                req.user = { id: decoded.id };

                next();
            } catch (e) {
                res.status(401).send({
                    message: errors.invalidToken,
                });
            }
        };
    }
}

export default UserAuth;
