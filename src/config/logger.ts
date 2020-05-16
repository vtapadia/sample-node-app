import * as winston  from "winston";

const {combine, json, logstash, timestamp, splat, errors, colorize} = winston.format;

const options: winston.LoggerOptions = {
  format: combine(timestamp(), errors({stack: true}), logstash()),
  defaultMeta: { service: 'sample-node-app', environment: process.env.NODE_ENV },
  transports: [
      new winston.transports.Console({
          level: process.env.NODE_ENV === "production" ? "error" : "debug"
      }),
      new winston.transports.File({ filename: "debug.log", level: "debug" })
  ]
};

const logger = winston.createLogger(options);

export default logger;