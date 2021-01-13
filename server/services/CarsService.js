import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"
class CarsService {
  async getAll(query = {}) {
    return await dbContext.Cars.find(query)
  }

  async getOne(carId) {
    let carFound = await dbContext.Cars.findById(carId)
    if (!carFound) {
      throw new BadRequest("No car exists with that Id")
    }
    return carFound
  }

  async create(body) {
    return await dbContext.Cars.create(body)
  }

  async edit(id, body) {
    // await this.getOne(id)
    let updated = await dbContext.Cars.findByIdAndUpdate(id, body, { new: true })
    if (!updated) {
      throw new BadRequest("No car exists with that Id")
    }
    return updated
  }

  // REVIEW i dont know where im getting this Id from 
  async delete(id) {
    let car = await dbContext.Cars.findByIdAndDelete(id)
    if (!car) {
      throw new BadRequest("No car exists with that Id")
    }
    return "successfully deleted"
  }

}
export const carsService = new CarsService()