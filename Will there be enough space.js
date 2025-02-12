//8 Kyu
//Will there be enough space?
//Fundamentals


// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting






//Solution I

function enough(cap, on, wait) {
    //conditional to check if there is enough room
    //wait _ on <= cap
    if(on+wait <= cap){
        return 0
    }else{
    //we do the math to check how many ppl are left out of the bus
        return Math.abs(cap-on-wait)
    }
  }


//Parameters
//cap-> bus capacity
//on-> how many ppl are in the bus
//wait -> num of ppl who will get on
//total peeps on bus = on + wait
//all params interegers, no strings, or symbols, no empty params, no funny bizz

//returns
//if wait + on <= to cap ->> return 0
//else if wait + on > cap ->> return Math.abs(cap - on - wait)

//examples
//console.log(enough(10, 5, 5), 0)
//console.log(enough(100, 60, 50), 10)