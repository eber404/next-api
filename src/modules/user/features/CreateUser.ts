import { CreateUserController } from '../controllers/CreateUserController'
import { CreateUserRepositoryLocal } from '../repositories/implementations/CreateUserRepositoryLocal'
import { CreateUserUseCase } from '../useCases/CreateUserUseCase'

const createUserRepository = new CreateUserRepositoryLocal()
const createUserUseCase = new CreateUserUseCase(createUserRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
