import app from "./app";

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  console.log(
      "  App is running at http://localhost:%d in %s mode",
      app.get("port"),
      app.get("env") // This one defaults to development, and can be overridden with env variable NODE_ENV
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;