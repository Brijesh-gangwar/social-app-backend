// require("dotenv").config(path :'./env');


import dotenv from "dotenv";

import connectdb  from "./db/db.js";

dotenv.config({ path: "./env" });


connectdb();


// -- approach
// function connectdb() {}  -- defined to use
// connectdb();  -- for use in other files


/*  // -- approach

import express from "express";

const app = express()

(async () => {
    try{
      await  mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        app.on("error", (error) => {
            console.error("Error connecting to the database:", error);
            throw error
        });


        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    }
    catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
      
})()

*/