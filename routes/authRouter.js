import express from "express";
import authControllers from "../controllers/authControllers.js";
import usersSchemas from "../schemas/usersSchemas.js";
import validateBody from "../helpers/validateBody.js";
import authenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";
import resizeFile from "../middlewares/resizeFile.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(usersSchemas.userSignupSchema),
 authControllers.signup
);

authRouter.post(
  "/login",
  validateBody(usersSchemas.userSigninSchema),
  authControllers.signin
);

authRouter.patch(
  "/subscription",
  authenticate,
  validateBody(usersSchemas.userUpdateSubscriptionSchema),
  authControllers.updateSubscription
);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatarUrl"),
  resizeFile,
  authControllers.updateAvatar
);

authRouter.post("/current", authenticate, authControllers.getCurrent);

authRouter.post("/logout", authenticate, authControllers.signout);

export default authRouter;