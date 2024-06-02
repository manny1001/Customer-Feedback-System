const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const feedbackRoutes = require("../routes/feedbackRoutes");
 

const options = {
  swaggerDefinition: swaggerDocument,
  apis: ["../routes/feedbackRoutes/*.js", "../routes/models/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;

