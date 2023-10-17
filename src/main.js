const students = [
  { name: "Student1", grade: "7.5" },
  { name: "Student2", grade: "5.5" },
  { name: "Student3", grade: "9" },
  { name: "Student4", grade: "8" },
  { name: "Student5", grade: "4" },
  { name: "Student6", grade: "6.5" },
  { name: "Student7", grade: "9.5" },
  { name: "Student8", grade: "5" },
];

const approved = students.filter((students) => students.grade >= 6);
console.log(approved);
