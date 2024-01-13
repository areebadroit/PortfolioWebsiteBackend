import CrudRepository from "./crudRepository.js";
import Contact from "../Models/contact.js";

class ContactRepository extends CrudRepository {
  constructor() {
    super(Contact);
  }
}

export default ContactRepository;
