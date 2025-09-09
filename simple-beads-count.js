//7 Kyu
//Simple beads count
//Fundamentals

// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// 0 @@ 0 @@ 0 @@ 0 @@ 0 @@ 0

// Implement a function returning the number of red beads.
// If there are less than 2 blue beads return 0.



//Solution

function countRedBeads(n) {
//check to see that n is >= 2 if not return zero
  if(n<2) return 0
//multiply the number times two and subtract two from it. Since the first blue bead and the last blue bead are not connected we take out two red beads
  return (n*2) - 2 
}

//num -> number of blue beads in the list, wont be empty, number can be 0, wont be null or undefined, will always be a num coming in. There are two red beads in between two blue beads

//num -> number of red beads in the link. We know that there are two red beads for every two blue beads. If n <2 return 0 

console.log(countRedBeads(6), 10)

