const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OngControllers = require("./controllers/OngControllers");
const IncidentControllers = require("./controllers/IncidentControllers");
const ProfileControllers = require("./controllers/ProfileControllers");
const SessionControllers = require("./controllers/SesssionControllers");

const routes = express.Router();

routes.post("/sessions", SessionControllers.create);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileControllers.list
);

routes.get("/ongs", OngControllers.listOngs);
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  OngControllers.create
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentControllers.listIncidents
);

routes.post("/incidents", IncidentControllers.create);

routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentControllers.delete
);

module.exports = routes;
