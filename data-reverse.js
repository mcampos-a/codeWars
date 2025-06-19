//6 Kyu
//Data Reverse
//Fundamentals, arrays

// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.


//Solution I

const dataReverse = data => {
//set up an emtpy array to store our 8 segment bytes
  const bytes = [];
//loop through the array and go up by 8 indexes
  for (let i = 0; i < data.length; i += 8) {
//use the .unchift() method to place the 8 byte segments to the front of the array after every iteration
//use the ... operator combined with the slice method to grab 8 elements (1 byte) at a time and put them the the fron of the array
//this will reverse it
    bytes.unshift(...data.slice(i, i + 8));
  }
//return the result array
  return bytes;
};
//Solution II

// function dataReverse(data) {
// //take care of the edge case that the data array is empty
//     if(data.length===0) return []
// //set up an empty array to keep track of the reversed 8 bit segmenets 
//     let result = []
// //calculate how many segments of 8 bits there are 
//     let bits = data.length/8
// //loop through array using the bits length and push a spliced segement of 8 bits from the data array into our result array. This will grab our 8 bit sections at a time
//     for(let i = 0; i<bits; i++){
//         result.unshift(data.splice(0,8))
//     }

// //Now we have an two dimensional array with 8 bit sub element arrays, so we use .join() to get a string of numbers, 
// //that then we will split into an array of str nums separated by a comma, lastly we map through that array and convert strings back to nums. 
//     return result.join().split(',').map(el=>Number(el))
// }

//arr -> arry never emtpy, always arr daa type coming in, wont be null or undefined. There will always be at least two segments of the array that are 8 bits long

//arr -> with every 8 bit segment of data reversed within the array order. 

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]), [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1])