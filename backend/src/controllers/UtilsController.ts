import { NextFunction, Request, Response } from "express";

import errors from "../shared/errors";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const axios = require("axios").create({
  headers: {
    Authorization: `Bearer ${SENDGRID_API_KEY}`,
    accept: "application/json",
  },
});

class UtilsController {
  sendFeedback() {
    return async (req: Request, res: Response, next: NextFunction) => {
      const message = req.body.message;
      const payload = {
        personalizations: [{ to: [{ email: "twdo.inkwo@gmail.com" }] }],
        from: { email: "twdo.inkwo@gmail.com" },
        subject: "Feedback",
        content: [
          {
            type: "text/plain",
            value: message,
          },
        ],
      };

      await axios
        .post(`https://api.sendgrid.com/v3/mail/send`, payload)
        .then((r: any) => {
          return res
            .status(200)
            .send({ message: "Thank you for your feedback!" });
        })
        .catch((e: any) => {
          return res.status(400).send({ error: errors.genericError });
        });
    };
  }
}

export default new UtilsController();
