import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { SendEmailController } from "./SendEmailController";
import { SendEmailUseCase } from "./SendEmailUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();

const sendEmailUseCase = new SendEmailUseCase(mailtrapMailProvider);

const createUserController = new SendEmailController(sendEmailUseCase);

export { sendEmailUseCase, createUserController };
