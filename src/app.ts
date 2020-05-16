import * as express from "express";

import config from "./config/config";

// Controllers (route handlers)
import * as helloController from "./web/helloWorld";
import * as nameController from "./web/name";

// Create Express server
const app = express();

app.set("port", config.PORT);

//Defining API's
app.get("/api/hello", helloController.getApi);
app.get("/api/firstName", nameController.firstName);
app.get("/api/lastName", nameController.lastName);
app.get("/api/name", nameController.name);

export default app;