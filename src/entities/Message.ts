export class Message {
  public name: string;
  public email: string;
  public message: string;

  constructor(props) {
    Object.assign(this, props);
  }
}
