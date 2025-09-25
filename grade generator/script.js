function gradeGenerator() {
  // Ask the user to input student marks
  let marks = prompt('Please input student grade');

  // Convert the input into a number
  marks = Number(marks);

  // Check if input is not a number or out of valid range (0–100)
  if (isNaN(marks) || marks < 0 || marks > 100) {
    return 'Input is invalid';
  }

  // Check grade ranges
  if (marks >= 79 && marks <= 100) {
    return 'A';
  } else if (marks >= 60 && marks <= 78) {
    return 'B';
  } else if (marks >= 49 && marks <= 59) {
    return 'C';
  } else if (marks >= 40 && marks <= 48) {
    return 'D';
  } else {
    return 'E'; // 0–39
  }
}

// Show the result in an alert
alert(gradeGenerator());
