class User {
  constructor(name, age) {
    this.firstName = name;
    this.age = age;
  }
  getName() {
    return this.firstName;
  }
  getDetail() {
    return `Hello ${this.firstName} | Your Age - ${this.age}`;
  }
}
class Student extends User {
  constructor(firstName, age, level) {
    super(firstName, age);
    this.level = level;
  }
  greetingStudent() {
    return `Welcome to you ${this.firstName} | your level - ${this.level}`;
  }
}
const user = new User("monija", 24);
console.log(user.getName());
console.log(user.getDetail());

const studentId = new Student("Karen roe", 20, "expert");
console.log(studentId.greetingStudent());
console.log(studentId.getDetail());
