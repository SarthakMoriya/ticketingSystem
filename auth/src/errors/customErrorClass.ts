// let ErrorType: {
//   message: string;
//   field?: string;
// };

export abstract class CustomErrorClass extends Error {
  abstract statusCode: number;

  constructor(message:string) {
    super(message);

    Object.setPrototypeOf(this, CustomErrorClass.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
