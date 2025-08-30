//8 Kyu
//Pillars
//Fundamentals, maths

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar)



//Solution

function pillars(numPill, dist, width) {
  return ((numPill*width)+((numPill-1)*(dist*100))-(2*width))
}

//num -> number of pillars, will alawys be >= 1, never empty, not null or undefined, always a num

//num -> distance between pillars will always be >=10 and <= 30, never empty, wont be null or undefined, always a num

//num -> width of the pillar will always be >= 10 and <= 50, never empty, wont be null, always a num.

console.log(pillars(2, 20, 25), )//(numPill*width) + (numPill*dist) - (2*width)


