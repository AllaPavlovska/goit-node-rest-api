import Contact from "../models/contactModel.js";

export const listContacts = () => Contact.find();

export const getContactById = (contactId) => Contact.findById(contactId);

export const removeContact = (contactId) => Contact.findByIdAndDelete(contactId);

export const addContact = (data) => Contact.create(data);

export const updateContact = (contactId, newData) => Contact.findByIdAndUpdate(contactId, newData, { new: true });

export const updateFavoriteStatus = (contactId, favorite) => Contact.findByIdAndUpdate(contactId, { favorite }, { new: true });

