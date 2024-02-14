const { userList, bookList, popularList } = require("../fakeData");

const resolvers = {
    Query: {
      userID(root, args) {return userList.find(user => user.email === args.email && user.password === args.password) },
      books() { return bookList },
      bookID(root, args) {  return bookList.find(book => book.id === args.id) },
      booksGenre(root, args) { return bookList.filter(book => book.genre === args.genre) },
      booksAuthor(root, args) { return bookList.filter(book => book.author === args.author) },
      popular(){return popularList}
    },
  
    Popular: {
      book: (parent) => {
        return bookList.filter(book => parent.bookID.includes(book.id))
      }
    },

    Mutation: {
        addUser(parent, {login, password, email}) {
            let success = true

            userList.forEach((user) => {
                if(user.email === email){
                    success = false
                }
            })
            if(success){
                userList.push({id: userList + 1, login, password, email})
                return {success, data: userList[userList.length - 1]}
            }
          return {success}
        },

        addBook(parent, {name, year, genre, author, img, description, editors, language, paperback}) {
            bookList.push({id: bookList.length + 1, name, year, genre, author, img, description, editors, language, paperback})
      
            return {success: true, data: bookList[bookList.length - 1]}
        },

        updateBook(parent, {id, name, year, genre, author, img, description, editors, language, paperback}) {
            let success = false
         
            bookList[id]= {...bookList[id], name, year, genre, author, img, description, editors, language, paperback}
           
          return {success, data: bookList[id]} 
        },

        deleteBook(parent, {id}) {
          const deleted = bookList.splice(id,1);
           
        bookList.map((book, i)=> book.id = i + 1)
  
            return {success: true, data: deleted[0]}
        },
      }
  };

  module.exports = resolvers;