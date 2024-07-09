import { Request, Response, NextFunction } from "express";
import { promises as fs } from "fs";
import path from "path";
import { Roles } from "./enums";

interface User {
  id: string;
  username: string;
  password: string;
  role: Roles;
}

interface AuthenticatedRequest extends Request {
  user?: User;
}

const filePath = path.resolve(__dirname, "./users.json");

const readUsersFromFile = async (): Promise<User[]> => {
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
};

const writeUsersToFile = async (users: User[]): Promise<void> => {
  const data = JSON.stringify(users, null, 2);
  console.log(data);
  await fs.writeFile(filePath, data, "utf8");
};

function generateGUID(): string {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 1000000);
  return `${timestamp}:${randomNum}`;
}

export const authenticateUser = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).send();
  }
  const encoded = auth.substring(6);
  const decoded = Buffer.from(encoded, "base64").toString("ascii");
  const [username, password] = decoded.split(":");

  const users = await readUsersFromFile();
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(403).send();
  }

  req.user = user;
  next();
};

export const authorizeAdmin = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user && req.user.role === Roles.ADMIN) {
    next();
  } else {
    res.status(403).send();
  }
};

export const getAllUsers = async (req: AuthenticatedRequest, res: Response) => {
  const users = await readUsersFromFile();
  if (req.user?.role === Roles.BASIC) {
    res.status(401).send();
  } else {
    res.send(users);
    console.log(users);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const users = await readUsersFromFile();
  const newUser: User = req.body;

  newUser.id = generateGUID();
  newUser.role = Roles.BASIC;
  users.push(newUser);

  await writeUsersToFile(users);
  res.send(newUser);
};

export const getByUsername = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const users = await readUsersFromFile();
  if (req.user?.role === Roles.BASIC) {
    res.status(401).send();
  } else {
    const username: string = req.params.username;
    const userByUsername = users.find((u) => u.username === username);
    if (!userByUsername) {
      res.status(404).send();
    } else {
      res.send(userByUsername);
    }
  }
};

export const updateUser = async (req: AuthenticatedRequest, res: Response) => {
  const users = await readUsersFromFile();
  const id: string = req.params.id;
  const userIndex = users.findIndex((u: User) => u.id === id);

  if (userIndex === -1) {
    res.status(404).send();
  } else if (req.user?.role === Roles.BASIC) {
    res.status(401).send();
  } else {
    const updatedUser: User = req.body;
    users[userIndex] = updatedUser;
    await writeUsersToFile(users);
    res.send(updatedUser);
  }
};

export const deleteUser = async (req: AuthenticatedRequest, res: Response) => {
  const users = await readUsersFromFile();
  if (req.user?.role === Roles.BASIC) {
    return res.status(401).send();
  } else {
    const username: string = req.params.username;
    const filteredUsers = users.filter((u: User) => u.username !== username);
    await writeUsersToFile(filteredUsers);
    res.status(200).send();
  }
};
