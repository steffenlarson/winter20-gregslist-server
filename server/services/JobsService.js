import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"




class JobsService {


  async getAll(query = {}) {
    return await dbContext.Jobs.find(query)

  }


  async getOne(jobId) {
    // REVIEW something is not working here. The function is not finding the id
    // NOTE found the problem. In controller make sure that I reference the url appendage correctly.
    let jobFound = await dbContext.Jobs.findById(jobId)
    if (!jobFound) {
      throw new BadRequest("No job exists by that ID")
    }
    return jobFound
  }


  async create(body) {
    return await dbContext.Jobs.create(body)
  }

  async edit(Id, body) {
    // REVIEW what is the {new: true} for???
    // await this.getOne(id)
    let updated = await dbContext.Jobs.findByIdAndUpdate(Id, body, { new: true })
    if (!updated) {
      throw new BadRequest("No Job exists with this ID")
    }
    return updated
  }


  async delete(Id) {
    let job = await dbContext.Jobs.findByIdAndDelete(Id)
    if (!job) {
      throw new BadRequest("No Job exists with that ID")
    }
    return "Successfully delort"
  }


}

export const jobsService = new JobsService