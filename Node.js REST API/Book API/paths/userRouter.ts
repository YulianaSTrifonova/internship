import express from "express";
import * as user from "../users/user";

const router = express.Router();

router.get(
  "/users",
  user.authenticateUser,
  user.authorizeAdmin,
  user.getAllUsers
);
router.post("/users", user.authenticateUser, user.createUser);
router.get(
  "/users/username/:username",
  user.authenticateUser,
  user.authorizeAdmin,
  user.getByUsername
);
router.put(
  "/users/:id",
  user.authenticateUser,
  user.authorizeAdmin,
  user.updateUser
);
router.delete(
  "/users/:username",
  user.authenticateUser,
  user.authorizeAdmin,
  user.deleteUser
);

export default router;
