import { CreateUserDto } from '../dtos/CreateUserDto'

export interface CreateUserRepository {
  create(user: CreateUserDto): void
}
