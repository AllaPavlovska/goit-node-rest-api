import Contact from "../models/contactModel.js";

async function updateFavoriteStatus(contactId, favorite) {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
      { new: true }
    );
    return updatedContact;
  } catch (error) {
    throw error;
  }
}

export { updateFavoriteStatus };
