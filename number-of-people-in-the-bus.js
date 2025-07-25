//7 Kyu
//Number of People in the Bus
//Fundamentals

// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.


//Solution I

var number = function(busStops){
//set up a variable to keep track of how many ppl are on the bus. Start at zero
  let result = 0
//loop through array and at each array element grab the first index and add it to result then grab the second element and subract it
  let busRoll = busStops.map((el)=> {
    result += el[0]
    result -= el[1]
  })
//return the result variable
  return result

}

//arr -> w/ array pairs of nums, always getting an array, arr wont be empty, arr wont be null or undefined, first element in arr pair = num of ppl that get on bus, second element in arr pair = num of ppl that get off bus
        //the firt bus stop will not have any ppl getting off since bus is empty.

//num -> how many ppl are still on the bus after you loop through the array

console.log(number([[10,0],[3,5],[5,8]]), 5)
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]), 21)