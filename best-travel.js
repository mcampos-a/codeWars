//5 Kyu
//Best Travel
//Fundamentals

// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?

// Example:
// With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

// The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.

// Examples:
// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

// Notes:
// try not to modify the input list of distances ls
// in some languages this "list" is in fact a string (see the Sample Tests).

function chooseBestSum(t, k, ls) {
//set up a variable to store the largest sum of distnaces
   var biggestCount = 0;
//set up a recursive function that takes as arguments a variable that keeps track of which town you have reached and the index at array ls you are at
   var recurseTowns = function(townsSoFar, lastIndex) {
//you check if the townsSoFar equals itself, which will only happen after the first run OR it will equal an epmty array
   townsSoFar = townsSoFar || [];
   //base case - takes us out of the recursive function
   if (townsSoFar.length === k) {
//if the length of the array that keeps track of the towns visited (in disntance traveled) is equal to our limit, add all the numbers in the array
      var sumDistance = townsSoFar.reduce((a,b)=>a+b);
//Now check to see if the sum of the distance traveled is less than or equal to our target distance AND double check to see if it is bigger than the current combination of distances
         if (sumDistance <= t && sumDistance > biggestCount) {
//if both of those things are true, reasign the variable storing the best travel distance
            biggestCount = sumDistance;
         }
//which will take us out of the recurisve function. 
      return; //EJECT - taking us past the recurisveTwons() call since it completed its recursive call
   } else {
     //recursive case - this is the step that allows us to reach into the array ls and keep adding distances to our townsSoFar tracking variable
     for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
//first we start at zero, making sure we grab the very first value of array ls and then we move up the array. We declare an index value here to make sure it gets passed down again from the recursive set
        recurseTowns(townsSoFar.concat(ls[i]), i);
     }
   }
}
//recurive call
recurseTowns();
//if we have a new value for biggestCount we return it else if we dont find any combination of towns to visit that is equal or less than our terget return null
return biggestCount || null;
}

//num -> target distance to travel based on paramater k, can be zero (t>= 0) and positive nums, wont be null or undefined, will always be a num
//num2 -> number of town you will visit, wont be zero or empty, k >=1, wont be null or undefined, will always be a num
//arr -> conatins nums that are num>=0, the arr.length >=1, wont be null or undefined, it will always be an arr

//num -> the sum of elements in the ls array that is less than or equal to t. Taking into account that you can only sum # of elements equal to k.

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]), 163) //
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]), 228) //

