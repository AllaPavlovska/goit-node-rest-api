import * as contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const updateFavoriteStatus = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  try {
    const updatedContact = await contactsService.updateFavoriteStatus(contactId, favorite);
    if (updatedContact) {
      res.status(200).json(updatedContact);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
