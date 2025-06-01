const { getDatabase } = require("../database")
const {ObjectId} = require('mongodb')

const COLLECTION_NAME = "authors"

class Author {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName 
    }

    static async getAll() {
        const db = getDatabase();

        try {
            const authors = await db.collection(COLLECTION_NAME).find({}).toArray();
            return authors;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async update(id, updatedAuthor) {
        const db = getDatabase();

        try {
            await db.collection(COLLECTION_NAME).updateOne({ _id: new ObjectId(id) }, { $set: updatedAuthor })
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = Author;
