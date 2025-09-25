function gradeGenerator () {
let marks = prompt('Please input student grade');
marks = Number(marks);
  if (marks >= 79 && marks >= 100) {
    return 'A'
  } else if (marks >= 60) {
    return 'B'
  } else if (marks >= 49) {
    return 'C'
  } else if (marks >= 40) {
    return 'D'
  } else if (marks <= 39) {
    return 'E'
  } else if (isNaN(marks)) {
    return 'Input is invalid'
  }
}
alert (gradeGenerator())