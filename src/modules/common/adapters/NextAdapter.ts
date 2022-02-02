import type { NextApiRequest, NextApiResponse } from 'next'

import { Controller, Request, Response, Handle } from '../interfaces/Controller'

export class NextApiAdapter {
  public static Post(controller: Controller) {
    return async function (req: NextApiRequest, res: NextApiResponse) {
      const request = new Request({
        body: req.body,
        cookies: req.cookies,
        query: req.query,
      })

      const response: Response<void> = {
        json: res.json,
        send: res.send,
        status: res.status,
      }

      return await controller.handle(request, response)
    }
  }
}
