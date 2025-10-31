/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  const uniqueData = [];
  data = data.sort((a,b) => a - b)
  data.forEach((d) => {
    if (!uniqueData.includes(d)) {
      uniqueData.push(d)
    }
  });
  return  uniqueData
}

console.log(result(data));
