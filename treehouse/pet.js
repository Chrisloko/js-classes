class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  get activity() {
    const today = new Date();
    const hour = today.getHours();

    if (hour > 8 && hour <= 20) {
      return "playing";
    } else {
      return "sleeping";
    }
  }

  speak() {
    console.log(this.sound);
  }
}

const ernie = new Pet("dog", 1, "Pug", "woof!");
const chelsea = new Pet("dog", 1, "Cocker", "yuppi");

console.log(ernie);
console.log(chelsea);
console.log(ernie.activity);

ernie.speak();

ernie["weight"] = 10;

console.log(ernie);

// let str = 2;
// str = String(str);

// console.log(str);

// class Student {
//     constructor(gpa, courses) {
//         this.gpa = gpa;
//         this.courses = courses;
//     }

//     printGPA() {
//         console.log(this.gpa);
//     }
//     addCourse(course){
//         this.courses.push(course);
//     }
//  }

//  const ashley = new Student(3.9, 'math');

// ashley.printGPA();
// console.log(ashley);

class Student {
  constructor(gpa, credits) {
    this.gpa = gpa;
    this.credits = credits;
  }

  get level() {
    if (this.credits > 90) {
      return "Senior";
    } else if (this.credits <= 90 && this.credits >= 61) {
      return "Junior";
    } else if (this.credits <= 60 && this.credits >= 31) {
      return "Sophmore";
    } else {
      return "Freshman";
    }
  }

  stringGPA() {
    return this.gpa.toString();
  }
}

const student = new Student(3.9, 80);
