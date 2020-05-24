import { Response, Request} from "express";
import {logger} from "../config/logger";
import {Message} from "../models/resources";
import myService from "../lib/myService";

export const firstName = (req: Request, res: Response) => {
  logger.debug("FirstName API called");
  res.json(new Message("Varesh"));
}

export const lastName = (req: Request, res: Response) => {
  logger.debug("LastName API called");
  res.json(new Message("Tapadia"));
}

export const name = (req: Request, res: Response) => {
  logger.debug("Full Name API called");
  myService.makeApiCalls().then((value) => {
    res.json(new Message(value));
  }).catch((error) => {
    logger.warn("Some error occured", error);
    res.sendStatus(500);
  });
}