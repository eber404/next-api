export class Request {
  public params?: any
  public body?: any
  public query?: any
  public cookies?: any

  constructor(props: Request) {
    Object.assign(this, props)
  }
}

declare type Send<T> = (body: T) => void

export interface Response<T = any> {
  send: Send<T>
  json: Send<T>
  status: (statusCode: number) => Response<T>
}

export type Handle = (request: Request, response: Response) => any

export interface Controller {
  handle: Handle
}
