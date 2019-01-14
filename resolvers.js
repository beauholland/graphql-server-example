const db = require('./db'); // mock data

// Resolvers define the technique for fetching the types in the schema.
const Query = {
    books: () => db.books.list()
};

module.exports = { Query };