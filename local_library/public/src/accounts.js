function findAccountById(accounts, id) {
  //use find to look for account with matching id
    const found = accounts.find((acc) => acc.id === id)
    //return account that was found
  return(found)
  }
  
  function sortAccountsByLastName(accounts) {
    //Use sort to order by last name
    accounts.sort((nameA, nameB) => (nameA.name.last > nameB.name.last ? 1 : -1));
    //return results
    return accounts
  }
  
  function getTotalNumberOfBorrows(account, books) {
    //place holder for # of borrows
    let numberBorrows = 0
    //search through each book in the books object
    books.forEach((book) => {
      //search through each borrow object in each book
      book.borrows.forEach((borrow) => {
        // add to numberBorrows if account id matches borrow id
        if (account.id === borrow.id) {
          numberBorrows ++
        }
      })
    })
    //return a _number_ that represents the number of times the account's ID appears in any book's `borrows` array
   return(numberBorrows)
    }
  function getBooksPossessedByAccount(account, books, authors) {
    //create empty array for books borrowed by account
    let booksBorrowed = []
    //books that are currently possessed by account
    books.forEach(book => {
      if (book.borrows.find(item => item.id === account.id && !item.returned)) {
        booksBorrowed.push(book)
      }
    })
    // add author info into book info
    booksBorrowed.forEach(book => {
      let theAuthor = authors.find(person => person.id === book.authorId)
      book['author'] = theAuthor
    })
    // return an array of book objects, including author information, that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.
    return(booksBorrowed)
  }
  
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
