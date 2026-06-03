import fs from "fs";
import path from "path";

export const loadSeedFile = () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "seed.sql"
  );

  return fs.readFileSync(filePath, "utf8");
};