
type Config = {
  readonly PORT: number;
  myService: {
    readonly url: string;
  }
};

const config: Config = {
  PORT: parseInt(<string>process.env.PORT) || 80,
  myService: {
    url: <string>process.env.SERVICE_URL || 'http://localhost:80'
  }
};

export default config;
