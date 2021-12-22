import { User } from "@/entities/User";
import { IUsersRepository } from "@/repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExist = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExist) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
