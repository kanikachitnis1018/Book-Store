import express from "express";
import { Book } from "../models/bookmodels.js";

const router = express.Router();

// route to post new books
router.post('/books', async(req,res)=> {
    try{
        if(!req.body.title || !req.body.author || !req.body.publishyear){
            return response.status(400).send({
                message: 'set all required fields'
            });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            year: req.body.publishyear,
        };

        const book = await Book.create(newBook);
        return res.send(book);

    } catch(error){
        console.log(error.message);
    }
}
)

//route to get all books
router.get("/books", async(req,res) => {
    try{
        const books = await Book.find({});
        return res.json({
            count: books.length,
            data: books,
        });
    } catch(error){
        console.log(error.message);
    }
})

//get books by id
router.get("/books/:id", async(req,res) => {
    try{
        const id = req.params;
        const book = await Book.findById(id);
        return res.json(book);
    } catch(error){
        console.log(error.message);
    }
})

//for updating book
router.put('/books/:id', async (res,req) => {
    try{
        if(!req.body.title || !req.body.author || !req.body.publishyear){
            return response.status(400).send({
                message: 'set all required fields'
            });
        }

        const id = request.params;
        const result = Book.findByIdAndUpdate(id);

        if(!result){console.log("book not found")};

    }catch(error){
        console.log(error.message);
    }
})

//to delete a book
router.delete("/books/:id", (res, req) => {
    try {
        const id = req.params;
        const result = Book.findByIdAndDelete(id);

        if(!result){console.log("book not found")};

    } catch (error) {
        console.log(error.message);
    }
})

export default router;