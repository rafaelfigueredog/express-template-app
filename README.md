# Express Template App
This is a Node.js template app that for building scalable and maintainable web applications using [Express](https://expressjs.com/) and [TypeScript](https://www.typescriptlang.org/).

The project comes preconfigured with the following features:

[Nodemon](https://nodemon.io/) for automatic server restarts during development
[dotenv](https://github.com/motdotla/dotenv) for loading environment variables from .env files
[Morgan](https://github.com/expressjs/morgan) for logging HTTP requests and responses
[Winston](https://github.com/winstonjs/winston) for logging application events and errors


## Getting Started

To get started, clone the repository and install the dependencies:

~~~bash
git clone https://github.com/rafaelfigueredog/express-template-app.git
cd express-template-app
npm install
~~~

Create a `.env` file in the root of the project and set any required environment variables. You can use the `.env.example` file as a starting point.

To start the server in development mode, run:

~~~bash
npm run start:dev
~~~

This will start the server with Nodemon and reload it on any changes to the code.

To build the production-ready application, run:

~~~bash
npm run build
~~~

This will generate a `dist` folder with the compiled JavaScript files.

To start the server in production mode, run:

~~~bash
npm start
~~~

This will start the server with the compiled JavaScript files in the `dist` folder.

## Logging
The project is preconfigured with both HTTP request/response logging and application event/error logging.

HTTP logs are logged to the console and to a file named access.log in the root of the project. The log format is the Apache Combined Log Format.

Application logs are logged to a file named app.log in the root of the project. The log format is JSON.

You can customize the log settings by editing the config/logger.ts file.

## License
This project is licensed under the [MIT License](https://mit-license.org/).
