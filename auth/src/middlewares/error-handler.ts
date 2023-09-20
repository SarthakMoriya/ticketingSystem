import { Request, Response, NextFunction } from "express";
import { CustomErrorClass } from "../errors/customErrorClass";
// import { RequestValidationError } from "../errors/requestValidationError";
// import { DatabaseConnectionError } from "../errors/databaseConnectionError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if (err instanceof RequestValidationError) {
  //   return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  // }
  // if (err instanceof DatabaseConnectionError) {
  //   return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  // }

  if (err instanceof CustomErrorClass) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  //if reaches this means no error
  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};

// if (err instanceof RequestValidationError) {
//   const formattedErrors = err.errors.map((error) => {
//     if (error.type === 'field') {
//       return { message: error.msg, field: error.path };
//     }
//   });
//   return res.status(400).send({ errors: formattedErrors });
// }
