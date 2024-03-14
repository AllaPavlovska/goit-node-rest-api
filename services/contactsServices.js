import Contact from "../models/contactModel.js";

const listContacts = async () => {
  try {
    return await Contact.find();
  } catch (error) {
    throw error;
  }
};

const getContactById = async (contactId) => {
  try {
    return await Contact.findById(contactId);
  } catch (error) {
    throw error;
  }
};

const removeContact = async (contactId) => {
  try {
    return await Contact.findByIdAndDelete(contactId);
  } catch (error) {
    throw error;
  }
};

const addContact = async (data) => {
  try {
    return await Contact.create(data);
  } catch (error) {
    throw error;
  }
};

const updateContact = async (contactId, newData) => {
  try {
    return await Contact.findByIdAndUpdate(contactId, newData, { new: true });
  } catch (error) {
    throw error;
  }
};

const updateFavoriteStatus = async (contactId, favorite) => {
  try {
    return await Contact.findByIdAndUpdate(contactId, { favorite }, { new: true });
  } catch (error) {
    throw error;
  }
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateFavoriteStatus,
};

