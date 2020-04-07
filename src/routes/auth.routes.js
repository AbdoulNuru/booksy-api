import express from "express";
import Models from "../database/models";
import toAuthJSON from "../helpers/toAuthJSON";
import { comparePassword } from "../helpers/jwt";

const { Users } = Models;
const router = express.Router();

router.post("/", async (req, res) => {
  const { credentials } = req.body;
  const user = await Users.findOne({
    where: { email: credentials.email },
  });
  const truePassword = await comparePassword(
    credentials.password,
    user.password
  );

  if (user && truePassword) {
    res.json({ user: toAuthJSON(user.email) });
  } else {
    res.status(404).json({ errors: { global: "Invalid credentials" } });
  }
});

export default router;
