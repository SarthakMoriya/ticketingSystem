import express from "express";
import 'express-async-errors'
import currentUserRouter from "./routes/current-user";
import signupRouter from "./routes/signup";
import signinRouter from "./routes/signin";
import signoutRouter from "./routes/signout";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/notFoundError";

const app = express();

//Middlewares
app.use(express.json());

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on PORT: 3000");
});
