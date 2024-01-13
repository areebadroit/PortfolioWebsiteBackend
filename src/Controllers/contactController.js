import { StatusCodes } from "http-status-codes";
import contactService from "../Services/contactService.js";
import apiResponse from "../Utils/common/index.js";
async function createContact(req, res) {
  console.log(req.body);
  try {
    const contact = await contactService.createContact({
      fullname: req.body.fullname,
      emailId: req.body.emailId,
      contactNumber: req.body.contactNumber,
      message: req.body.message,
    });
    console.log(contact);
    apiResponse.SuccessResponse.message = "Successfully created a contact";
    apiResponse.SuccessResponse.data = contact;
    return res.status(StatusCodes.CREATED).json(apiResponse.SuccessResponse);
  } catch (error) {
    console.log(error);
    apiResponse.ErrorResponse.message =
      "Something went wrong while creating a contact";
    apiResponse.ErrorResponse.error = error;
    return res.status(error.statusCode).json(apiResponse.ErrorResponse);
  }
}
// async function getContacts(req, res) {
//   try {
//     const allContact = await contactService.getContacts();
//     SuccessResponse.message = "Listing all Contacts";
//     SuccessResponse.data = allContact;
//     SuccessResponse.success = true;
//     return res.status(StatusCodes.OK).json(SuccessResponse);
//   } catch (error) {
//     ErrorResponse.message =
//       "Something went wrong while retrieving all Contacts";
//     ErrorResponse.error = error;
//     return res.status(error.statusCode).json(ErrorResponse);
//   }
// }
// async function getContact(req, res) {
//   try {
//     const contact = await Contactservice.getContact(req.params.id);
//     SuccessResponse.message = "Listing contact with the given id";
//     SuccessResponse.data = contact;
//     SuccessResponse.success = true;
//     return res.status(StatusCodes.OK).json(SuccessResponse);
//   } catch (error) {
//     ErrorResponse.message =
//       "Something went wrong while retrieving contact with the given id";
//     ErrorResponse.error = error;
//     return res.status(error.statusCode).json(ErrorResponse);
//   }
// }
// async function destroyContact(req, res) {
//   try {
//     const response = await Contactservice.destroyAirplane(req.params.id);
//     SuccessResponse.message = `Contact with id ${req.params.id} deleted.`;
//     SuccessResponse.data = response;
//     SuccessResponse.success = true;
//     return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
//   } catch (error) {
//     ErrorResponse.message =
//       "Something went wrong while deleting contact with the given id";
//     ErrorResponse.error = error;
//     return res.status(error.statusCode).json(ErrorResponse);
//   }
// }

export default {
  createContact,
};
