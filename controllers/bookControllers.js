const Book = require("../models/Book")
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.getAll() 
        res.status(200).json(books)
    } catch(err) {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    }
}

exports.addBook = async (req, res) => {
    const book = {
        title: req.body.title,
        year: req.body.year,
        author: req.body.author,
    }

    try {
        await Book.add(book)
        res.status(200).json(book)
    } catch(err) {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    }
}

exports.deleteBook = async (req, res) => {
    const id = req.params.id
    try {
        await Book.delete(id)
        res.status(200).json({success: true})
    } catch(err) {
        console.error(err)
        res.status(500).json({success: false})
    }
}
