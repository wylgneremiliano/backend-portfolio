import { Email } from "../../entities/Email";
import { Messages } from "../../shared/database/mongoose/schemas/Messages";
import { IMessageRepository } from "../IMessageRepository";

export class MongoMessagesRepository implements IMessageRepository {
  async create(messageDTO: IMessageRepository) {
    const message = await Messages.create({
      ...messageDTO,
    });

    return message;
  }
}
