import express from "express";
import { updateFavoriteStatus } from "../controllers/favoriteContactController.js";

const contactsRouter = express.Router();

contactsRouter.patch("/:contactId/favorite", updateFavoriteStatus);

export default contactsRouter;
