import { Request, Response } from "express";
import { SendEmailUseCase } from "./SendEmailUseCase";

export class SendEmailController {
  constructor(private sendEmailUseCase: SendEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      await this.sendEmailUseCase.execute({
        name,
        email,
        password,
      });
      return response.status(201).send();
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
