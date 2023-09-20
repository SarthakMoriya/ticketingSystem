import express, { Response, Request } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/requestValidationError";
import { DatabaseConnectionError } from "../errors/databaseConnectionError";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be  between 4-20 characters"),
  ],
  (req: Request, res: Response) => {
    // try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    const { email, password } = req.body;
    //if errors in req.body error array will not be empty
    console.log("creating a user...");

    throw new DatabaseConnectionError("Error connecting DB");

    res.send({});
    // } catch (error) {
    //   res.status(404).send("error.message");
    // }
  }
);

export default router;
