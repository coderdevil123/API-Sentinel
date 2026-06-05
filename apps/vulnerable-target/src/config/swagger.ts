import { Express } from "express";
import swaggerUi from "swagger-ui-express";

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "API-Sentinel Vulnerable Lab",
    version: "1.0.0"
  },

  paths: {
    "/api/v1/health": {
      get: {}
    },

    "/api/v1/users": {
      get: {},
      post: {}
    },

    "/api/v1/users/{id}": {
      get: {}
    },

    "/api/v1/products": {
      get: {}
    },

    "/api/v1/products/search": {
      get: {}
    },

    "/api/v1/admin": {
      get: {}
    },

    "/api/v1/auth/login": {
      post: {}
    }
  }
};

export const setupSwagger = (
  app: Express
) => {

  app.get(
    "/openapi.json",
    (_, res) => {
      res.json(swaggerDocument);
    }
  );

  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  );
};