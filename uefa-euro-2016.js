//8 Kyu
//UEFA EURO 2016
//Fundamentals

// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."


//Solution

function uefaEuro2016(teams, scores){
  let winningTeam

  if(scores[0]>scores[1]){
    winningTeam = teams[0]
     return `At match ${teams[0]} - ${teams[1]}, ${winningTeam} won!`
  }else if(scores[1]>scores[0]){
    winningTeam = teams[1]
     return `At match ${teams[0]} - ${teams[1]}, ${winningTeam} won!`
  }else{
     return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }
}




