import express, { request, response } from "express";
import mongoose from "mongoose";
import {PORT, mongoDBURL} from "./config.js";
import { Book } from "./models/bookmodels.js";
import booksRoutes from "./routes/booksRoutes.js"
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

//
app.get('/', (req, res) =>{
    console.log("hello");
});

app.use('/books', booksRoutes);

    mongoose.connect(mongoDBURL).then(() => {
            console.log("connected to mongo");
            app.listen(PORT, () =>{
                console.log(`listening at port ${PORT}`);
            });                                                 // should get connected to the port only if it gets connected to mongo
        })
        .catch((error) => {
            console.log(error);
        });