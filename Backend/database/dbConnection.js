import mongoose from "mongoose"

export const dbConnection = async () => {
    mongoose.connect(process.env.DB_URI).then(() => console.log("Database Connected")).catch((err) => console.log(`Some Error Occured While Connecting Database ${err}`))
}