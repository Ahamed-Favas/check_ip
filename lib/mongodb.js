import mongoose from "mongoose";
let connectionStatus = false
export const connectMongoDB = async () => {
    if (!connectionStatus) {
        try {
            await mongoose.connect(process.env.MONGODB_URI)
            connectionStatus = true
        } catch (error) {      }
    }
}