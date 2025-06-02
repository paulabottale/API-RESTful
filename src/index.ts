import express from "express"
import { connectMongodb } from "./config/connectDB"
import { Schema, model} from "mongoose"
process.loadEnvFile()
import { Book } from "./interfaces/Book"

const PORT = process.env.PORT

const app = express()
app.use(express.json())


//MODELS
const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true, unique: true },
    publishedYear: { type: Number, required: true },
    genre: { type: Array, required: true },
    description: { type: String, required: true },
}, {
    versionKey: false
}
    )

const Book = model("Book", bookSchema)

//PETICIONES (GET, POST, PATCH, DELETE) a la ruta base (api/books)

//recuperar todos los libros
app.get("/api/books", async (req, res) =>{
    try {
        const books = await Book.find()
        res.json({
            succes: true,
            data: books,
            message: "Recuperando todos los libros"
        })
    } catch (error:any) {
        res.json({
            succes: false,
            error: error.message
        })        
    }
})

//recuperar un libro por su id
app.get("/api/books/:id", async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
})

//agregar un libro
app.post("/api/books", async (req, res) =>{
    const body = req.body
        const {title, author, publishedYear, genre, description} = body
        if(!title || !author || !publishedYear || !genre || !description){
            res.json({succes: false, message: "data invalida"})
    }
    try {
        const newBookData: Book = { title, author, publishedYear, genre, description }

        const newBook = new Book (newBookData)
        await newBook.save()

        res.json({succes: true, data: newBook, message: "Libro creado correctamente"})
    }  catch (error:any) {
        res.json({succes: false, error: error.message})
    }
})

//actualizar un libro
app.patch("/api/books/:id", async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
})

//eliminar un libro
app.delete("/api/books/:id", async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
})


app.listen(PORT, () => {
    console.log(`Servidor en escucha en el puerto http://localhost:${PORT}`)
    connectMongodb()
})
