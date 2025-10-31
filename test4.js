/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (!numbers.includes(index)) {
      return index
    }
  }
}

console.log(result(numbers));
