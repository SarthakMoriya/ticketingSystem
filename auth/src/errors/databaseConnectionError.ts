import { CustomErrorClass } from "./customErrorClass";

export class DatabaseConnectionError extends CustomErrorClass {
  statusCode = 500;
  reason = "Error Connecting Database";
  constructor(message:string) {
    super("Error Connecting Database");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
