const { getDatabase } = require("../database")
const {ObjectId} = require('mongodb')

const COLLECTION_NAME = "books"

class Book {
    constructor(title, year, author) {
        this.title = title;
        this.year = year;
        this.author = author;
    }

    static async getAll() {
        const db = getDatabase();

        try {
            const books = await db.collection(COLLECTION_NAME).find({}).toArray();
            return books;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
    
    static async add(book) {
        const db = getDatabase();

        try {
            await db.collection(COLLECTION_NAME).insertOne(book);
        } catch (error) {
            console.error(error);
        }
    }

    static async delete(id) {
        const db = getDatabase()

        try {
            await db.collection(COLLECTION_NAME).deleteOne({_id: new ObjectId(id)});
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = Book;
