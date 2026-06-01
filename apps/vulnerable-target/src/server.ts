// src/server.ts

import app from "./app";
import { env } from "./config/environment";

app.listen(env.PORT, () => {
  console.log(`
=================================
 Vulnerable Target Started
 Environment: ${env.NODE_ENV}
 Port: ${env.PORT}
=================================
`);
});