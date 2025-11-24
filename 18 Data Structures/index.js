class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `${this.firstName} ${this.lastName} / ${this.year} years old`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return `You are experlled!!!`;
    }
    return `${this.firstName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
}

let firstStudent = new Student("luka", "chanu", 10);
let secondStudent = new Student("luka", "chanu", 10);
console.log(firstStudent);
console.log(firstStudent.markLate());
console.log(firstStudent.addScore(30));
