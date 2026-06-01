import app from "./app";
import { env } from "./config/environment";
import { bootstrapDatabase } from "./config/bootstrap-database";

const startServer = async () => {
  await bootstrapDatabase();

  app.listen(env.PORT, () => {
    console.log(`
=================================
 Vulnerable Target Started
 Environment: ${env.NODE_ENV}
 Port: ${env.PORT}
=================================
`);
  });
};

startServer();