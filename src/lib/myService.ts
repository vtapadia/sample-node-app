import config from "../config/config";
import got from "got";
import { Message, iMessage } from "../models/resources";
import logger from "../config/logger";

// simpleService.set("base_url", process.env.SERVICE_URL || "http://localhost");
// simpleService["base_url"] = process.env.SERVICE_URL || "http://localhost";

console.log(process.env.SERVICE_URL || "http://localhost");

const gotAPI = got.extend({
	prefixUrl: config.myService.url
});

const fetch = async (url: string):Promise<iMessage> => {
  //Gets the response and converts the body to a json object.
  let apiResponse = await gotAPI.get(url).json();
  logger.info("got response for " + url + ":::::" + apiResponse);
  //Maps it to a iMessage format.
  return <iMessage>apiResponse;
};


const makeApiCalls = async ():Promise<string> => {
  let first = fetch("api/firstName");
  let last = fetch("api/lastName");
  return Promise.all([first, last]).then((values) => {
    return values[0].message + values[1].message + " !! welcome";
  }).catch((error) => {
    logger.error(error);
    return "Something went wrong";
  });
}

export default {makeApiCalls};
