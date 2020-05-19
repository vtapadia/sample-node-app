# Sample Node App
This App is a simple NodeJS APP.

## Setup

To create a local instance, create a .env file on the root. An example file is commited for reference.

.env file is used to set the environment variables and can override the defaults from the application.

## Libraries choices
### DOTENV
A simple library to support .env files. If provided the application can update the env variables...  which are used in config.ts to setup the configuration for the application.
Tricky to read about how all this works together with NODE... but at the end, it was pretty simple.

### Winston Logging framework
After a bit of research, it seems the winston library is very popular and highly extendible. Therefore I used that to configure the logging.
It is pretty simple and very easy to work with.
https://github.com/winstonjs/winston

### @godaddy/terminus
This library, referred from the express documentation helps in setting up the healthcheck setup for a service. This ensures that the application is shutdown gracefully.

### GOT
Was searching for a hhtp client library to make api calls. Request is the most popular library for that, however it has been deprecated since Feb 2020. So I searched up and saw that GOT is quite popular. The library is not bad, I guess its just that I needed to learn about promise and async/await to implement what I was trying to do. Also, I wanted to work with JSON responses to parse and store the same so that took some time to figure out. Finally though, once it works, it is easy.
