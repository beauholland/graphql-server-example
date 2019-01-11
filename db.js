const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
  books: store.collection('books')
};