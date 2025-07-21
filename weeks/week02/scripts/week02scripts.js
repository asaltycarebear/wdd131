const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}

studentReport.forEach(value => {
  if (value < LIMIT) {
    console.log(value);
  }
});

for (let index in studentReport) {
  if (studentReport[index] < LIMIT) {
    console.log(studentReport[index]);
  }
}

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let today = new Date();

for (let i = 0; i <= DAYS; i++) {
  let nextDate = new Date();
  nextDate.setDate(today.getDate() + i);
  let dayName = dayNames[nextDate.getDay()];
  console.log(dayName);
}
