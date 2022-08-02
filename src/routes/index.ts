import express from 'express';

const routes = express();

routes.get('/status', (request, response) => {
  response.json({message: 'Hello World!'});
});

export default routes;
