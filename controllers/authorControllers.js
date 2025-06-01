const Author = require("../models/Author");

exports.getAuthors = async (req, res) => {
    try {
        const authors = await Author.getAll()
        res.status(200).json(authors)
    } catch (err) {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    }
}

exports.updateAuthor = async (req, res) => {
    const authorId = req.params.id
    const { firstName, lastName } = req.body

    if (!firstName || !lastName) res.status(404).json({message: "Author not found"})

    try {
        await Author.update(authorId, {firstName, lastName})
        res.status(200).json({firstName, lastName})
    } catch (err) {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    }
}

