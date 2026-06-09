import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import scanRoutes
from "./routes/scan.routes";

import sessionRoutes
from "./routes/session.routes";

import reportRoutes
from "./routes/report.routes";

const app =
  express();

app.use(
  helmet()
);

app.use(
  cors()
);

app.use(
  express.json()
);

app.use(
  morgan("dev")
);

app.use(
  "/api",
  scanRoutes
);

app.use(
  "/api",
  sessionRoutes
);

app.use(
  "/api",
  reportRoutes
);

const PORT =
  7000;

app.listen(
  PORT,
  () => {

    console.log(
      `Control Plane running on ${PORT}`
    );
  }
);