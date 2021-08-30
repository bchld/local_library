function findAuthorById(authors, id) {
  //use find to filter through authors and return requested id
  const foundAuthor = authors.find((auth) => auth.id === id)
  //return result
  return foundAuthor
}

function findBookById(books, id) {
  // use find to filter through books and return requested id
  const foundBook = books.find((book) => book.id === id)
  return foundBook
}

function partitionBooksByBorrowedStatus(books) {
  //filter books that are borrowed
  const notAvail = books.filter((book) => book.borrows[0].returned === false)
  //filter books that are available
  const avail = books.filter((book) => book.borrows[0].returned === true)
  //return both in one array
  return ([notAvail, avail])
}

function getBorrowersForBook(book, accounts) {
  //create new array of borrowers for the book
  let borrowHistory = book.borrows.map((borrow) => {
    //use findAuthorById as helper function to search through accounts for borrower info
    let accountInfo = findAuthorById(accounts, borrow.id)
    // build in returned property to match previous borrow property
    accountInfo.returned = borrow.returned
    return accountInfo
  })
  //return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.
  return(borrowHistory.slice(0,10))
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
