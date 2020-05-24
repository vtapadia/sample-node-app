
type Config = {
  readonly PORT: number;
  readonly serviceName: string;
  myService: {
    readonly url: string;
  }
};

const config: Config = {
  PORT: parseInt(<string>process.env.PORT) || 80,
  serviceName: 'sample-node-app',
  myService: {
    url: <string>process.env.SERVICE_URL || 'http://localhost:80'
  }
};

export default config;
