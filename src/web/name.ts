import { Response, Request} from "express";
import logger from "../config/logger";
import {Message} from "../models/resources"

export const firstName = (req: Request, res: Response) => {
  logger.debug("FirstName API called");
  res.json(new Message("Varesh"));
}

export const lastName = (req: Request, res: Response) => {
  res.json(new Message("Tapadia"));
}

export const name = (req: Request, res: Response) => {
  //TODO call first and last and then submit the result
  logger.debug("Full Name API called");
  res.json(new Message("Varesh Tapadia"));
}