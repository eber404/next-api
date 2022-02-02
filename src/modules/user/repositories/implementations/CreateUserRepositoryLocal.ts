import { CreateUserDto } from '../../dtos/CreateUserDto'
import { CreateUserRepository } from '../UserRepository'

export const users: CreateUserDto[] = []

export class CreateUserRepositoryLocal implements CreateUserRepository {
  public async create(user: CreateUserDto) {
    await users.push(user)
  }
}
