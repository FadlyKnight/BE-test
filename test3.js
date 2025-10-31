/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data3 = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function isExist(d) {
  return d !== null && d !== undefined
}

function result(data) {
  // Your Code Here
  const clearData = [];
  data.forEach((d,i) => {
    const rawArray = {};
    // check exist session_name
    if (isExist(d.session_name)) {
      rawArray.session_name = d.session_name      
    }

    // check exist classes
    if (isExist(d.classes)) {
      rawArray.classes = d.classes.map((a) => {
        const rawClasses = {}
        // check exist class_name
        if (isExist(a.class_name)) {
          rawClasses.class_name = a.class_name
        }
        // check exist student
        if (isExist(a.students)) {
          rawClasses.students = a.students.map((s) => {
            if (isExist(s.student_name)) {
              return {student_name: s.student_name}
            }
          })
        }

        return rawClasses
      })

    }

    clearData.push(rawArray)
  })

  return clearData
}

console.log(result(data3));
