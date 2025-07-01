//8 Kyu
//Thinkful - Logic Drills: Traffic light
//Fundamentals

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.


//Solution I

function updateLight(current) {
//set up a switch statement that takes in the current argument and checks each of the three possible cases
switch(current){
  case 'green':
    return 'yellow'
    break
  case 'yellow':
    return 'red'
    break
  case 'red':
    return 'green'
    break
}

}

//str -> color of a traffic light, wont be empty, will always be a str, wont be null or undefined

//str -> swtich(str)
//case: 'green' -> "yellow", case: "yellow" -> "red", case: "red" -> "green"

console.log(updateLight('green'), 'yellow')
