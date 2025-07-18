import mongoose from "mongoose"

import { DB_NAME } from "../constants.js"


const connectdb = async () => {
    try {
      const connectioninstance =   await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)

        console.log(`\n Database connected successfully at db host : ${connectioninstance.connection.host}`)


    } catch (error) {
        console.error("mongodb connection error :", error)
        process.exit(1)
    }
}

export default connectdb