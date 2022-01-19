declare interface IMessageCreateDTO {
  name: string;
  email: string;
  message: string;
}

declare type IMessageEntity<T extends {}> = T & {
  _id?: string;
  name: string;
  email: string;
  message: string;
};

declare interface IMessageRepository<T = any> {
  create(entity: IMessageCreateDTO): Promise<IMessageEntity<T>>;
}
