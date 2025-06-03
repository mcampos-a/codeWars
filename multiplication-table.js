//6 Kyu
//Multiplication table
//Fundamentals, Arrays


// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]


//Solution I

function multiplicationTable(size) {
//first we will set up an empty array to contain our integer multiplication tables
  let result = []
//loop from 1 to our input seize
  for(let i=1; i<=size; i++){
//inside the first loop we will set up another emtpy array to contain each integer multiplication table up to the seize input
    let intTable = []
//next nest a another for loop to have the ability to build each integers table up to the size input
    for(let j=1; j<=size; j++){
//mulitply both loops variables and push them to the array of the first loop
      intTable.push(i*j)
    }
//push the first loops array into the result array
    result.push(intTable)
  }
  

//return the result array
  return result
}


//parameters
//integer -> integer will not be empty, non-negative integer, no null or undefined values, only integers coming in.

//Return
//arr -> w/ array elements (2D array), based on the input integer. 

//Example
//console.log(multiplicationTable(3), [[1,2,3],[2,4,6],[3,6,9]])
//console.log(multiplicationTable(5), [[1,2,3,4,5],[2,4,6,8,10],[3,6,9,12,15],[4,8,12,16,20],[5,10,15,20,25]])