//8 Kyu
//Surface Area and Volume of a Box
//Fundamentals, Geometry

//Write a function that returns the total surface area and volume of a box.

// The given input will be three positive non-zero integers: width, height, and depth.

// The output will be language dependant, so please check sample tests for the corresponding data type, (list, tuple, struct, query, et cetera).


//Solution I

function getSize(width, height, depth){
//declare a variable to calculate the surface area
    let surfaceArea = 2*(height*depth) + 2*(width*height) + 2*(width*depth)
//declare a variable to calculate the volume
    let volume = width * height * depth
//return an array with the SA and V
    return [surfaceArea, volume]
}

// nums -> width, height, depth. Wont be zero or empty, always will be nums coming in, they wont be null or undefined. 

//arr -> of SA and Volume

console.log(getSize(2,2,6), [56, 24]) //SA = 2(2x2) + 2(2x6) + 2(2x6), V = 2x2x6
