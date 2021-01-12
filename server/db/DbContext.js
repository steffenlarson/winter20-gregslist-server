import ValueSchema from "../models/Value";
import mongoose from "mongoose";

import CarSchema from "../models/Car"
import JobSchema from "../models/Job"


// REVIEW what does putting the variables here do? Intellesence? And what does each part mean? Variable = mongoose[what sets up a shcema].model[its a model]("[name of what it is]", which individual schema)
class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema);
  Jobs = mongoose.model("Job", JobSchema)
}

export const dbContext = new DbContext();
