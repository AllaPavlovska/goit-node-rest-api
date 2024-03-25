import { promises as fsPromises } from 'fs';
import path from 'path';


const listContacts = (filter = {}, query = {}) => {
  return Contact.find(filter, "", query)
    .populate("group", "name")
    .populate("owner", "email");
};


const getOneContact = (filter) => Contact.findOne(filter);

const removeContact = (filter) => Contact.findOneAndDelete(filter);

const addContact = (data) => Contact.create(data);

const updateContactById = (filter, data) =>
  Contact.findOneAndUpdate(filter, data)
    .populate("group", "name")
    .populate("owner", "email");

const updateStatusContactById = (filter, data) =>
  Contact.findOneAndUpdate(filter, data)
    .populate("group", "name")
    .populate("owner", "email");

export default {
  listContacts,
  addContact,
  getOneContact,
  removeContact,
  updateContactById,
  updateStatusContactById,
};
