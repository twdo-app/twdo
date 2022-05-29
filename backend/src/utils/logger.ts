const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({
      level: "error",
      filename: "logs/error.log",
      maxsize: 100000,
      maxFiles: 10,
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
      maxsize: 100000,
      maxFiles: 10,
    }),
  ],
});

logger.add(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
  })
);

export default logger;
