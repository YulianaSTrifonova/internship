import express, { Express, Request, Response } from "express";
import swagger from "./swagger";
import bookPaths from "./paths/bookRouter";
import userPaths from "./paths/userRouter";

const app: Express = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Library");
});

app.use("/bookRouter", bookPaths);
app.use("/userRouter", userPaths);

swagger(app);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
