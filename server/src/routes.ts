import exepress from 'express';

const routes = exepress.Router();

routes.get('/', (request, response) => {

    return response.json({ message: 'Hello world' });
});

export default routes;