import * as contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res, next) => {
  const contacts = await contactsService.listContacts().catch(next);
  res.status(200).json(contacts);
};

export const getOneContact = async (req, res, next) => {
  const { id } = req.params;
  const contact = await contactsService.getContactById(id).catch(next);
  if (!contact) throw HttpError(404);
  res.status(200).json(contact);
};

export const deleteContact = async (req, res, next) => {
  const { id } = req.params;
  const deletedContact = await contactsService.removeContact(id).catch(next);
  if (!deletedContact) throw HttpError(404);
  res.status(200).json(deletedContact);
};

export const createContact = async (req, res, next) => {
  const { name, email, phone } = req.body;
  const newContact = await contactsService.addContact({ name, email, phone }).catch(next);
  res.status(201).json(newContact);
};

export const updateContact = async (req, res, next) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  const updatedContact = await contactsService.updateContact(id, { name, email, phone }).catch(next);
  if (!updatedContact) throw HttpError(404);
  res.status(200).json(updatedContact);
};

export const updateFavoriteStatus = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const updatedContact = await contactsService.updateFavoriteStatus(contactId, favorite).catch(next);
  if (!updatedContact) throw HttpError(404);
  res.status(200).json(updatedContact);
};
