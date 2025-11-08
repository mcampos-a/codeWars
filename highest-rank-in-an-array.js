
//6 Kyu
//Highest Rank Number in an Array
//Fundamentals, array

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]


//Solution


function highestRank(arr) {
  const counts = {};
  // Count the occurrences of each number
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  let highestCount = 0;
  let highestRankNum = -Infinity;

  // Iterate through the counts to find the highest rank number
  for (const numStr in counts) {
    const num = parseInt(numStr); // Convert key back to number
    const count = counts[numStr];

    if (count > highestCount) {
      highestCount = count;
      highestRankNum = num;
    } else if (count === highestCount) {
      // If counts are equal, choose the higher number
      if (num > highestRankNum) {
        highestRankNum = num;
      }
    }
  }

  return highestRankNum;
}




