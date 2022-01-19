import { Email } from "../entities/Email";

export interface IEmailRepository {
  save(user: Email): Promise<void>;
}
