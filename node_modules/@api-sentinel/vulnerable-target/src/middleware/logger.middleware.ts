import { Request, Response, NextFunction } from "express";

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const startTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startTime;

    console.log(
      `[INFO] ${req.method} ${req.originalUrl} | ${res.statusCode} | ${duration}ms`
    );
  });

  next();
};