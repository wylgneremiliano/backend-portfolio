import { v4 } from "uuid";

export class Email {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<Email, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id === v4();
    }
  }
}
