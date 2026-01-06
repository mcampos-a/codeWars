//7 kyu
//Categorize New Member
//fundamentals

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//Solution

function openOrSenior(data){
//loop through the array 
  return data.map((el,i)=>{
//check if the 0 index >=55 and the 1st index >7
    if(el[0] >= 55 && el[1] > 7){
//return "Open" else return "Senior"
      return "Senior"
    }else{
      return "Open"
    }
  })
}

//arr -> array of pair nums, wont be empty, wont be null or undefined, only array of pair nums will be coming in

//str -> if the 0 index of each pair >= 55 and 1st index of each pair is > 7, return 'Senior' else 'Open'

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]), ["Open", "Open", "Senior", "Open", "Open", "Senior"])