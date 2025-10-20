//8 Kyu
//Distance between points in 2D
//Fundamentals, geometry

// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.


//Solution

function distanceBetweenPoints(a, b) {
  let dx = (a.x - b.x)**2
  let dy = (a.y - b.y)**2
  
  if(dy===0) return 0
  
  return (dx+dy)**.5
}




