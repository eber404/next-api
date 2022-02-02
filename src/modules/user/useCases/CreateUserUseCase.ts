import { CreateUserDto } from '../dtos/CreateUserDto'
import { CreateUserRepository } from '../repositories/UserRepository'

export class CreateUserUseCase {
  constructor(private readonly createUserRepository: CreateUserRepository) {}

  async execute(input: CreateUserDto) {
    await this.createUserRepository.create(input)
  }
}
