import express from "express";
import * as contactsControllers from "../controllers/contactsControllers.js";
import validateBody from "../helpers/validateBody.js";
import * as contactsSchemas from "../schemas/contactsSchemas.js";
import isValidId from "../middlewares/isValidId.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", isValidId, contactsControllers.getOneContact);

contactsRouter.delete("/:id", isValidId, contactsControllers.deleteContact);

contactsRouter.post(
  "/",
  validateBody(contactsSchemas.createContactSchema),
  contactsControllers.createContact
);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(contactsSchemas.updateContactSchema),
  contactsControllers.updateContact
);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(contactsSchemas.updateFavoriteSchema),
  contactsControllers.updateFavoriteStatus
);

export default contactsRouter;
