import mongoose from "mongoose";

import config from "@config/database";

export const serverDatabase = mongoose.createConnection(config.uri, {});

serverDatabase.on("error", (e) => console.error("Database error", e));

serverDatabase.on("connectiong", (e) =>
  console.error("Trying to open connection with database", e)
);
