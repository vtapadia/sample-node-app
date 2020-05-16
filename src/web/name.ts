import { Response, Request} from "express";
import logger from "../config/logger";

export const firstName = (req: Request, res: Response) => {
  logger.debug("FirstName API called");
  res.send("Varesh");
}

export const lastName = (req: Request, res: Response) => {
  res.send("Tapadia");
}

export const name = (req: Request, res: Response) => {
  //TODO call first and last and then submit the result
  logger.debug("Full Name API called");
  res.send("Varesh Tapadia");
}