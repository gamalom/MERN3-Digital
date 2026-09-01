import express from "express";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoutes);

export { app };
