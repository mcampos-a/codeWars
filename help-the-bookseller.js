//6 Kyu
//Help the bookseller!
//Fundamentals, Algorithms

// A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.

// Task
// You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

// Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

// If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).

// Example
// # the bookseller's stocklist:
// "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

// # list of categories: 
// "A", "B", "C", "W"

// # result:
// "(A : 20) - (B : 114) - (C : 50) - (W : 0)"
// Explanation:

// category A: 20 books (ABART)
// category B: 114 books = 25 (BKWRK) + 89 (BTSQZ)
// category C: 50 books (CDXEF)
// category W: 0 books

//Solution I

function stockList(books, categories) {
//set up a hash map to populate the categoery/ avilable stock
    let categoryMap = {}
//check to see if there is any stock given in the input
    if(!books.length) return ""
//loop through the books array and store the first char then populate the map setting the first char as the key and grabbing the value of the stock
    books.forEach((book)=>{
        let category = book[0]
        categoryMap[category] = (categoryMap[category] || 0) + Number(book.split(" ")[1])
    })
//use the .map() method on the categories array to loop through and put together the result str. Note that if the category does not exisit in map we need to make sure it is equal to zero.
    return categories.map((category)=> `(${category} : ${categoryMap[category] || 0})`).join(" - ")
}

//Parameters
//list1 & list2 -> contains the book category and stock list, the second list is a list of categories we are looking info on stock
//both arrays can be empty, only always get array of strings, wont be null or undefined.

//Return
//str -> with the following format "(A : 20) - (B : 114) - (C : 50) - (W : 0)". Take the requested categories and the total stock found in the books stock. If any array input is empty return an empty str

//Example
//console.log(stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]), "(A : 20) - (B : 114) - (C : 50) - (W : 0)")