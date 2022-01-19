import {} from "./";

export interface IMessageRepository {
  create(entity: ICampaignCreateDTO): Promise<ICampaignEntity<T>>;
}
