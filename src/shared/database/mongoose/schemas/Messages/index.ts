import { Schema } from "mongoose";

import { serverDatabase } from "@shared/database/mongoose";

const MessagesSchema = new Schema({
  name: String,
  message: String,
  email: String,
});

export default serverDatabase.model("Messages", MessagesSchema, "Messages");
