//8 Kyu
//Simple multiplication
//Fundamentals

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//Solution I

function simpleMultiplication(number) {
    return number % 2==0 ? number*8 : number*9
}


//num -> not empty, never null, only num coming in.

//num -> if num % 2 ? num * 8 : num * 9

//simpleMultiplication(4), 32
