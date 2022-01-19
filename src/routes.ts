import { Router, Response, Request } from "express";
import { createUserController } from "./useCases/SendEmail";

const router = Router();

router.post("/sendEmail", (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

export { router };
