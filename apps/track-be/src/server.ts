import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import mainRouteV1 from "./routes/main-route-v1";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: process.env.PRIMARY_BACKEND_URL,
    credentials: true,
  })
);

app.use("/api/v1", mainRouteV1);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
