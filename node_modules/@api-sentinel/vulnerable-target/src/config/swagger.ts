import { Express } from "express";
import swaggerUi from "swagger-ui-express";

export const setupSwagger = (app: Express) => {
  const swaggerDocument = {
    openapi: "3.0.0",
    info: {
      title: "API-Sentinel Vulnerable Lab",
      version: "1.0.0",
    },
    paths: {
      "/api/v1/health": {
        get: {
          summary: "Health Check",
        },
      },
    },
  };

  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  );
};