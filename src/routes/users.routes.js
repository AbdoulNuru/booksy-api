import express from "express";
import uuid from "uuid/v4";
import Models from "../database/models";
import { hashPassword } from "../helpers/jwtHelpers";
import toAuthJSON from "../helpers/toAuthJSON";

const { Users } = Models;
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body.user;
  const hash = hashPassword(password);
  const userExist = await Users.findOne({ where: { email } });

  if (userExist) {
    return res
      .status(400)
      .json({ errors: { global: "The user account already exist" } });
  }

  const save = Users.create({ id: uuid(), email, password: hash });
  res.status(201).json({ user: toAuthJSON(email, save.isConfirmed) });
});

export default router;
