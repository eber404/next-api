import {
  Controller,
  Request,
  Response,
} from '../../common/interfaces/Controller'
import { CreateUserUseCase } from '../useCases/CreateUserUseCase'

export class CreateUserController implements Controller {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      await this.createUserUseCase.execute({
        email,
        password,
      })

      res.status(201).send('Created.')
    } catch (error) {
      res.status(500).send('Internal server error.')
    }
  }
}
