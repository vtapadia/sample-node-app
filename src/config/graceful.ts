import {createTerminus, TerminusOptions, HealthCheckError} from "@godaddy/terminus";
import logger from "./logger"

const healthCheck = async () => Promise.resolve();

const onShutdown = async () => {
  logger.warn("Server is shuting Down");
}

const onSignal = () => {
  logger.info('server is starting cleanup');
  return Promise.all([
    // your clean logic, like closing database connections
  ]);
}

const waitingTime = 5000;

const beforeShutdown =  () => {
  // given your readiness probes run every 5 second
  // may be worth using a bigger number so you won't
  // run into any race conditions
  return new Promise(resolve => {
    logger.info("server is waiting for %d", waitingTime);
    setTimeout(resolve, waitingTime);
  })
};

const terminalOpts: TerminusOptions = {
  healthChecks: {
    '/healthcheck': healthCheck,
    verbatim: true
  },
  beforeShutdown,
  onShutdown,
  onSignal
};

const graceful = (server: any) => createTerminus(server, terminalOpts);

export default graceful;
