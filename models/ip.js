import mongoose, { Schema, models } from "mongoose";
const ipSchema = new Schema({
    ip : {
        type: String,
        required: false,
    },

}, {timestamps: true})
// mongoose.deleteModel(models.Work)
const IpModel = models.IpModel || mongoose.model("IpModel", ipSchema)
export default IpModel