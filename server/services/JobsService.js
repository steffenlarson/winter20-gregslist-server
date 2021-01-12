import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"




class JobsService {


  async getAll(query = {}) {
    return await dbContext.Jobs.find(query)

  }


  async getOne(jobId) {
    let jobFound = await dbContext.Jobs.findById(jobId)
    if (!jobFound) {
      throw new BadRequest("No job exists by that ID")
    }
    return jobFound
  }


  async create(body) {
    return await dbContext.Jobs.create(body)
  }





}

export const jobsService = new JobsService