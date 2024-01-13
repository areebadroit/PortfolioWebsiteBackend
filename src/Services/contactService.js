import StatusCodes from "http-status-codes";
import ContactRepository from "../Repositories/contactRepository.js";

const contactRepository = new ContactRepository();

async function createContact(data) {
  try {
    const contact = await contactRepository.create(data);
    return contact;
  } catch (error) {
    throw new AppError(
      "Error occured in Creation of Contact",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getContacts() {
  try {
    const allContact = await contactRepository.getAll();
    return allContact;
  } catch (error) {
    throw new AppError(
      "Error occured in all retrieving all planes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getContact(id) {
  try {
    const Contact = await contactRepository.get(id);
    return Contact;
  } catch (error) {
    throw new AppError(
      "Error occured in retrieving an Contact with the given id",
      error.statusCode
    );
  }
}
async function destroyContact(id) {
  try {
    const response = await contactRepository.destroy(id);
    return response;
  } catch (error) {
    throw new AppError(
      "Error occured in deleting an Contact with the given id",
      error.statusCode
    );
  }
}
export default {
  createContact,
  getContacts,
  getContact,
  destroyContact,
};
