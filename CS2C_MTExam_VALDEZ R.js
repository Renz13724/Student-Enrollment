let DSA = [];
let PL = [];
let Networks = [];

while (true) {
  let subjectChoice = prompt("Select a subject:\nA) DSA\nB) PL\nC) Networks");
  let operationChoice = prompt("Select an operation:\nA) Enroll\nB) Unenroll\nC) Select Another Subject\nD) Exit");

  if (operationChoice === "A") {
    let studentName = prompt("Enter the Student Name:");
    switch (subjectChoice) {
      case "A":
        DSA.push(studentName);
        break;
      case "B":
        PL.push(studentName);
        break;
      case "C":
        Networks.push(studentName);
        break;
    }
  } else if (operationChoice === "B") {
    let subjectArray;
    switch (subjectChoice) {
      case "A":
        subjectArray = DSA;
        break;
      case "B":
        subjectArray = PL;
        break;
      case "C":
        subjectArray = Networks;
        break;
    }
    if (subjectArray.length === 0) {
      console.log("No students enrolled in this subject.");
    } else {
      console.log("Enrolled students:", subjectArray);
      let studentToRemove = prompt("Enter the student's name to remove:");
      let index = subjectArray.indexOf(studentToRemove);
      if (index !== -1) {
        subjectArray.splice(index, 1);
        console.log("Student removed successfully.");
      } else {
        console.log("Student not found in the list.");
      }
    }
  } else if (operationChoice === "C") {
    continue;
  } else if (operationChoice === "D") {
    console.log("DSA Enrolled Students:", DSA);
    console.log("PL Enrolled Students:", PL);
    console.log("Networks Enrolled Students:", Networks);
    break;
  }
}
