import StatusCodes from "http-status-codes";

class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    const response = await this.model.create(data);
    return response;
  }
  async destroy(id) {
    const response = await this.model.deleteOne({
      id: id,
    });
    if (!response) {
      throw new AppError(
        "Not able to find the resource to delete",
        StatusCodes.NOT_FOUND
      );
    }
    return response;
  }

  async get(id) {
    const query = this.model.where({ id: id });
    const response = await query.findOne();
    if (!response) {
      throw new AppError(
        "Not able to find the resource",
        StatusCodes.NOT_FOUND
      );
    }
    return response;
  }
  async getAll() {
    const response = await this.model.find();
    return response;
  }
}
export default CrudRepository;
