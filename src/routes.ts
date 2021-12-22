import { Router, Response, Request } from "express";

const router = Router();

router.post("/user", (req: Request, res: Response) => {
  return res.status(201).send("Teste");
});

export { router };
