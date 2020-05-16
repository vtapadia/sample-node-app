import { Response, Request} from "express";

export const firstName = (req: Request, res: Response) => {
  res.send("Varesh");
}

export const lastName = (req: Request, res: Response) => {
  res.send("Tapadia");
}

export const name = (req: Request, res: Response) => {
  //TODO call first and last and then submit the result
  res.send("Varesh Tapadia");
}