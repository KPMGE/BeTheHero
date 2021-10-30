const express = require('express');
const OngControllers = require('./controllers/OngControllers');
const IncidentControllers = require('./controllers/IncidentControllers');
const ProfileControllers = require('./controllers/ProfileControllers');
const SessionControllers = require('./controllers/SesssionControllers');

const routes = express.Router();

routes.post('/sessions', SessionControllers.create);

routes.get('/profile', ProfileControllers.list);

routes.get('/ongs', OngControllers.listOngs);
routes.post('/ongs', OngControllers.create);
routes.get('/incidents', IncidentControllers.listIncidents);
routes.post('/incidents', IncidentControllers.create);
routes.delete('/incidents/:id', IncidentControllers.delete);

module.exports = routes;
