/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  let prefix = null;
  words.forEach((a) => {
    if(prefix) {
      if (a.length < prefix.length) {
        prefix = a
      }

      if (prefix == a) {
       prefix = a
      }
    } else {
      prefix = a
    }
  })

  return prefix
}

console.log(result(words));
