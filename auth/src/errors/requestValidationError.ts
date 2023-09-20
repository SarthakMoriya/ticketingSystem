import { ValidationError } from "express-validator";
import { CustomErrorClass } from "./customErrorClass";
// if we raised and error or error occured it will be added to this array

//interface so that every class having serialize func implements in same way ie returning array of objecvts having same fields

// interface CustomError {
//   statusCode: number;
//   serializeErrors(): {
//     message: string;
//     field?: string;
//   }[];means returns an array of objects {message:...}
// }

//however we will use abstract class as when complied to javascript Interfaces donot have instanceof Method


export class RequestValidationError extends CustomErrorClass {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super("Invalid request Parameters"); //mandatory to call constr. of base class

    //Since we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => {
      if (error.type === "field") {
        return { message: error.msg, field: error.path };
      }
      return { message: error.msg };
    });
  }
}

// throw new RequestValidationError(errors);
