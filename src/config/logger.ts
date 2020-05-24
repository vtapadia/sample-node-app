import * as winston  from "winston";
import {Tracer, ExplicitContext, ConsoleRecorder, BatchRecorder} from "zipkin";
const CLSContext = require('zipkin-context-cls');
import config from "../config/config";
import zipkin = require("zipkin");

const {combine, json, logstash, timestamp, splat, errors, colorize, metadata} = winston.format;

const myFormat = winston.format((info:any, opts = {}) => {
  info.traceId = opts.meta.traceId;
  //TS gives an error as the field is not defined.

  return info;
});

const options: winston.LoggerOptions = {
  format: combine(timestamp(), splat(), errors({stack: true}), metadata({fillWith: ['spanId','traceId','parentTraceId']}), logstash()),
  defaultMeta: { service: 'sample-node-app', environment: process.env.NODE_ENV },
  transports: [
      new winston.transports.Console({
          level: process.env.NODE_ENV === "production" ? "error" : "debug"
      }),
      new winston.transports.File({ filename: "debug.log", level: "debug" })
  ]
};

export const logger = winston.createLogger(options);

const winstonLogger:zipkin.Logger = {
  logSpan: (span) => {
    // const json = JSON_V2.encode(span);
    logger.log("info", "Logging Span:::: ", span);
  }
};

const batchRecorder = new BatchRecorder({logger: winstonLogger});

const debugRecorder: zipkin.Recorder = {
  record: (rec) => {
    const {spanId, traceId} = rec.traceId;
    let msg = `recording: ${traceId}/${spanId} ${rec.annotation.toString()}`;
    logger.debug(msg, rec);
    batchRecorder.record(rec);
  }
};

const ctxImpl = new CLSContext('zipkin');
const recorder = batchRecorder;
const localServiceName = config.serviceName; // name of this application
export const tracer = new Tracer({ctxImpl, recorder, localServiceName});
