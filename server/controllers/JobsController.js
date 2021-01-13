import BaseController from "../utils/BaseController";
import { jobsService } from "../services/JobsService"




export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router

      .get("", this.getAll)
      .get("/:jobId", this.getOne)
      .post("", this.create)
      .put("/:Id", this.edit)
      .delete("/:Id", this.delete)

  }




  async getAll(req, res, next) {
    try {
      res.send(await jobsService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      res.send(await jobsService.getOne(req.params.jobId))
    } catch (error) {
      next(error)
    }
  }


  async create(req, res, next) {
    try {
      res.send(await jobsService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  async edit(res, req, next) {
    try {
      res.send(await jobsService.edit(req.params.Id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      // REVIEW why do we only use id here and not in the get one??
      res.send(await jobsService.delete(req.params.Id))
    } catch (error) {
      next(error)
    }
  }
}