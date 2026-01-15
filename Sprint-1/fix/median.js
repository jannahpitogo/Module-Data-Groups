// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

// GOAL
// - return null if the list doesn't have numbers  *
// - sort only numbers if it has mixed (like strings with numbers)\
// - Get the median for odd length
// - Get the median for even length

function calculateMedian(list) {
  if (!Array.isArray(list)) return null; // To check first if the input is an array

  if (!list.some((ele) => typeof ele === "number")) return null; // To check if there's a number input

  list = list.filter((item) => typeof item == "number"); // filtering the element if it is a mixed array.
  const arrangedList = [...list].sort((a, b) => a - b); // So that I will be able to reassigned it as an array and is arranged.

  if (arrangedList.length % 2 === 1) {
    const middleIndex = Math.floor(arrangedList.length / 2);
    let median = arrangedList[middleIndex];
    return median;
  } else if (arrangedList.length % 2 === 0) {
    const firstIndex = arrangedList.length / 2;
    const secondIndex = firstIndex - 1;
    median = (arrangedList[firstIndex] + arrangedList[secondIndex]) / 2;
    return median;
  }
}

module.exports = calculateMedian;
