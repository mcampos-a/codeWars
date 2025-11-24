//8 kyu
//Is he gonna survive?
//fundamentals

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

function hero(bullets, dragons){
//check if the number of bullets is at least twice the value of dragons 
  return bullets >= dragons*2
}

//num -> the number of bullets taken by the hero, wont be empty, wont be null or undefined, will always be a number and it can be zeo

//num2 -> the number of dragons surrounding the castle. Wont be empty, wont be null or undefined, will always be a number

//boolean -> if the number of bullets istwo times de amount of dragons return true else false

console.log(hero(4,2), true)