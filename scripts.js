// ====================
// Utility Functions
// ====================

/**
 * Count the occurrences of each element in an array.
 * @param {string[]} arr - The array to count occurrences in.
 * @returns {Object} An object with the counts of each element.
 */
function countOccurrences(arr) {
    const counts = {};
    for (let element of arr) {
      counts[element] = counts[element] ? counts[element] + 1 : 1;
    }
    return counts;
  }
  
  // ====================
  // Main Program
  // ====================
  
  // Prompt the user for froyo flavors and split into an array
  const userInputString = prompt(
    "Please enter your froyo flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  const flavorArray = userInputString.split(",");
  
  // Count the occurrences of each flavor
  const flavorCounts = countOccurrences(flavorArray);
  
  // Display the flavor counts in the console
  for (const [flavor, count] of Object.entries(flavorCounts)) {
    console.log(`You have ordered ${count} ${flavor} froyo${count > 1 ? 's' : ''}.`);
  }
  