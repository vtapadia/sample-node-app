import * as express from "express";

import config from "./config/config";
import {logger, tracer} from "./config/logger";

// Controllers (route handlers)
import * as helloController from "./web/helloWorld";
import * as nameController from "./web/name";
import {expressMiddleware} from "zipkin-instrumentation-express";

// Create Express server
const app = express();


app.set("port", config.PORT);
app.use(expressMiddleware({tracer}));

//Defining API's
app.get("/api/hello", helloController.getApi);
app.get("/api/firstName", nameController.firstName);
app.get("/api/lastName", nameController.lastName);
app.get("/api/name", nameController.name);

logger.info("Service is started");

export default app;