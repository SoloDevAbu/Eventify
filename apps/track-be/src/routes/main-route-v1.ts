import { Router } from "express";
import authTrackRouter from "./universal-track-routes/auth-track-route";

const mainRouteV1 = Router();

mainRouteV1.use("/auth", authTrackRouter);

export default mainRouteV1;