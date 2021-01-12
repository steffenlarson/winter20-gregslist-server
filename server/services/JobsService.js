import { dbContext } from "../db/DbContext"




class JobsService {

  async getAll(query = {}) {
    return await dbContext.Jobs.find(query)

  }

  async create(body) {
    return await dbContext.Jobs.create(body)
  }





}

export const jobsService = new JobsService