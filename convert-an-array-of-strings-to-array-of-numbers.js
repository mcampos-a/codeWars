//8 Kyu
//Pillars
//Fundamentals, maths

// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.



//Solution

function toNumberArray(stringarray){
    return stringarray.map(el=>Number(el))
}

//arr -> of string nums, wont be empty, wont be null or undefined, will always be an array of nums.

//arr -> of nums, converting from str nums to nums.

console.log(toNumberArray(["1", "2", "3"]), [1, 2, 3])



