import { NextApiRequest, NextApiResponse } from 'next'

import { createUserController } from '../../../modules/user/features/CreateUser'
import { users } from '../../../modules/user/repositories/implementations/CreateUserRepositoryLocal'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') return createUserController.handle(req, res)
  if (req.method === 'GET') return res.status(200).send({ data: users })
}
