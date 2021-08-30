function getTotalBooksCount(books) {
  //set accumulator placeholder
  let accumulator = 0
  //use reduce to add up books in array
  let result = books.reduce((acc, book) => acc + 1, accumulator)
  //return result
  return(result)
}

function getTotalAccountsCount(accounts) {
  //set accumulator placeholder
  let accumulator = 0;
  //use reduce to add up total accounts
  let result = accounts.reduce((acc, account) => acc +1, accumulator)
  //return result
  return(result);
}

function getBooksBorrowedCount(books) {
  //filter books that are currently out into new array
 const borrowedCount = books.filter((book) => book.borrows[0].returned === false)
 //return length of that array for total count
 return (borrowedCount.length)
}

function getMostCommonGenres(books) {
  // create an empty array for final result
  let result = []
  //create an empty object
  let genres = {}
  // loop through books
  books.forEach((book) => {
    // if the genre is in the object
    if (genres[book.genre]) {
      // increase by 1
      genres[book.genre]++
    } else {
      //if it's not in object add it and make value 1
      genres[book.genre] = 1;
    }
  })
  //placed genres objects in array
  for (let genre in genres){
    result.push({name: genre, count: genres[genre]})
  }
  //return sorted result array from largest to smallest with only 5 results
  return result.sort((genreA, genreB) => (genreA.count > genreB.count ? -1 : 1)).slice(0,5)
}


function getMostPopularBooks(books) {
  //use map to return new array with just book title and borrow count
  return books.map((book) => {
    //book.title is the name and use .length to count number of borrows records
    return {name: book.title, count: book.borrows.length}
    //use sort to order books from most borrows to least and slice to only return top 5 results
  }).sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1)).slice(0, 5)
}


function getMostPopularAuthors(books, authors) {
  //create new array for final result
  let result = []
// loop through authors
  authors.forEach((author) => {
    //filter authors by ones that match author.id
    let bookAuth = books.filter((book) => book.authorId === author.id)
    //add how many times books were borrowed
    let bookAuthBorrows = bookAuth.reduce((borrowTot, book) => borrowTot + book.borrows.length, 0)
    //push the final result into result array
    result.push({name: author.name.first + " " + author.name.last, count: bookAuthBorrows})
  })
  //sort results from most to least and slice down to a max of five results
  return result.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1)).slice(0, 5)
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
