import express from "express";
import Models from "../database/models";
import toAuthJSON from "../helpers/toAuthJSON";

const { Users } = Models;
const router = express.Router();

router.post("/", async (req, res) => {
  const { credentials } = req.body;
  const user = await Users.findOne({
    where: { email: credentials.email },
  });

  if (user && user.email === credentials.email) {
    res.json({ user: toAuthJSON(user.email) });
  } else {
    res.status(404).json({ errors: { global: "Invalid credentials" } });
  }
});

export default router;
