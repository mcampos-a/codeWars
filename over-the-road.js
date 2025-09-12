//7 Kyu
//Over The Road
//Fundamentals, mathematics, performance

// Task
// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

// Street
// 1|   |6
// 3|   |4
// 5|   |2
//   you
// Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

// Example (address, n --> output)
// Given your house number address and length of street n, give the house number on the opposite side of the street.

// 1, 3 --> 6
// 3, 3 --> 4
// 2, 3 --> 5
// 3, 5 --> 8
// Note about errors
// If you are timing out, running out of memory, or get any kind of "error", read on. Both n and address could get upto 500 billion with over 200 random tests. If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash. This is not a kata problem so please don't post an issue. Similarly if the tests don't complete within 12 seconds then you also fail.

// To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. Read the discourse for some inspiration :)



//Solution

function overTheRoad(address, n){
//we know that the sum of opposite house number is always constant and can be defined as sum = (2 * n + 1). Now if we want to know the conmplementary number to the input we have the following equation sum = address + opposite address or (2 * n + 1) - address = opposite

  return (2 * n + 1) - address


}

//num -> the address number we are using as a reference point, wont be empty, wont be null or undefined, will always be a number.
//num2 -> the length of the street. Helping us determine the house accross the address house. Wont be empty, wont be null or undefined, will always be a number
          //for ever length of street there will be two houses

//num -> the house number that is accross the street, if the address number is odd, the return will be an even number on the right side and vise eversa, 

console.log(overTheRoad(1,3), 6)
console.log(overTheRoad(2,3), 5)

