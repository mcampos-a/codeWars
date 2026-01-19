//8 Kyu
//Is your period late?
//fundamentals, date time

// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.



//Solution

function periodIsLate(last, today, cycleLength) {
//get the number of time in miliseconds from the day you check to the last cycle
  let timePassedMs = today.getTime() - last.getTime()
//convert the miliseconds to days
  let daysPast = timePassedMs / (1000 * 60 * 60 * 24)
//check if the days past is greater than the cycle length
  return daysPast > cycleLength
}

//date -> date object with the date of the last period
//date2 -> date object with the date we checked cycle
//num -> number represents the length of the cycle in dates

//boolean -> true if the number of days from the last period date to today is greater than the cycle length else false. So if the number days passed is greater than the cycle day return true

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28), true)


