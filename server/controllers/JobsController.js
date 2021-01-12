import BaseController from "../utils/BaseController";
import { jobsService } from "../services/JobsService"




export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router

      .get("", this.getAll)
      .post("", this.create)

  }




  async getAll(req, res, next) {
    try {
      res.send(await jobsService.getAll(req.query))
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
}