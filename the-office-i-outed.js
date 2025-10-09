//7 Kyu
//pThe Office I - Outed
//Fundamentals, arrays

// Your colleagues have been looking over your shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object ( meet ) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room ( boss ). Their score is worth double its face value (but they are still just one person!).


//Solution

function outed(meet, boss){
//set up a variable to store happiness level of team
  let result = 0
//set up a variable to keep track of members in the meet
  let count = 0
//loop through object keys and add the happiness level to the result variable
  for(let cooworker in meet){
    result+= meet[cooworker]
    count += 1
  }
//check if boss is in meet and add bosses happiness again to the result variable
  if(meet[boss]){
    result+= meet[boss]
  }
//calculate the average happiness of the meet and check if its less than or equal to 5
  return result/count <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}







