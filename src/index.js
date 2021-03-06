import express from "express";
import path from "path";
import bodyParser from "body-parser";
import auth from "./routes/auth.routes";
import users from "./routes/users.routes";

const app = express();

app.use(bodyParser.json());
app.use("/api/auth", auth);
app.use("/api/users", users);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(4000, () => console.log("Booksy server running"));
