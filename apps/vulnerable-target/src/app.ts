import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_, res) => {
  res.status(200).json({
    success: true,
    service: "vulnerable-target",
    status: "healthy",
  });
});

export default app;