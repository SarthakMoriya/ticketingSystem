import { CustomErrorClass } from "./customErrorClass";

export class NotFoundError extends CustomErrorClass {
  statusCode= 404 ;
  constructor() {
    super("Error invalid URL");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: "Not Found!" }];
  }
}
