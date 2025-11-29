import { Router } from "express";
import { trackSignin, trackSignup } from "../../controllers/universla-track";

const authTrackRouter = Router();

authTrackRouter.post("/signin", trackSignin);
authTrackRouter.post("/signup", trackSignup);

export default authTrackRouter;