// https://github.com/flowtype/flow-typed/issues/114

declare type NextFunction = (error?: Object) => void

declare class Express {
  post(route: any, cb: Function): any;
  get(route: any, cb: Function): any;
}

declare class Request {
  headers: {[key: string]: string};
  body: Object;
}

declare class Response {
  json(body: any): Response;
  status(statusCode: number): Response;
  on(type: String, mappingFunction: Function): any;
}


declare type ResponseHelper = (res: Response, cb: ?Function) => void
declare type ResponseMiddleware = (res: Request, res: Response, next: NextFunction) => void
declare type ResponseHandler = (res: Request, res: Response, next: ?NextFunction) => void
