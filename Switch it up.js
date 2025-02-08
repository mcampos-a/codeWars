//8 Kyu
//Switch it up!
//Fundamentals


// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

// Input: 1

// Output: "One".

// If your language supports it, try using a switch statement.




//Solution I

function switchItUp(number){
  //using a switch case we can take number and comapre it to the options that our switch will have 0-9

  switch(number){
    case 0:
      return "Zero";
      break;
    case 1:
      return "One";
      break;
    case 2:
      return "Two";
      break;
    case 3:
      return "Three";
      break;
    case 4:
      return "Four";
      break;
    case 5:
      return "Five";
      break;
    case 6:
      return "Six"
      break;
    case 7: 
      return "Seven";
      break;
    case 8:
      return "Eight";
      break;
    case 9:
      return "Nine"
      break;
  }
  }


//Parameters 
//number>= 0 & number <=9, always an integer, no funny bizz

//Returns
//The word string of the number provided will be the return

//Examples
//console.log(switchItUp(1), 'One')
//console.log(switchItUp(4), 'Four')

