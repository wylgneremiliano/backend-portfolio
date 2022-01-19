import { Email } from "../../entities/Email";
import { IMailProvider } from "../../providers/IMailProvider";
import { IEmailRepository } from "../../repositories/IEmailRepository";
import { ISendRequestDTO } from "./SendEmailDTO";

export class SendEmailUseCase {
  constructor(private mailProvider: IMailProvider) {}

  async execute(data: ISendRequestDTO) {
    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "teste",
        email: process.env.MAIL_USER,
      },
      subject: "Seja bem vindo",
      body: "teste",
    });
  }
}
