//8 Kyu
//Transportation on vacation
//Fundamentals, strings


// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).




//Solution I

function rentalCarCost(d) {
  //conditional to check if d >= 7
    if(d >= 7){
      return (d*40) - 50
  //else if check if d >=3
    }else if (d >=3){
      return (d*40) - 20
  //else no promotion
    }else{
      return d*40
    }  
  
  }


//parameters
//40/day,
//if day >= 7 -> total - 50
//if fay >= 3 -> total - 20
//day will lways be pos intergers, no str, no funny bizz

//return
//total amount in dollars for a given nuber of days

//examples 
//console.log(reantalCarCost(3),100)
//console.log(rentalCarCost(7),230)

//