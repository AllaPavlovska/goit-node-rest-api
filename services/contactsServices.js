import { promises as fsPromises } from 'fs';



import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const contactsPath = path.join(__dirname, 'contacts.json');



async function listContacts() {
  try {
    const data = await fsPromises.readFile(contactsPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
}

async function getContactById(contactId) {
  try {
    const data = await fsPromises.readFile(contactsPath, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts.find(contact => contact.id === contactId) || null;
  } catch (error) {
    throw error;
  }
}

async function removeContact(contactId) {
  try {
    const data = await fsPromises.readFile(contactsPath, 'utf-8');
    const contacts = JSON.parse(data);
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    await fsPromises.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
    return updatedContacts.length !== contacts.length ? { id: contactId } : null;
  } catch (error) {
    throw error;
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fsPromises.readFile(contactsPath, 'utf-8');
    const contacts = JSON.parse(data);
    const newContact = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone
    };
    contacts.push(newContact);
    await fsPromises.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    throw error;
  }
}

export { listContacts, getContactById, removeContact, addContact };