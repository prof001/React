class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGretting() {
    return "My name is " + this.name;
  }

  getDescription() {
    return `${this.name} is ${this.age} years(s) old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }

  hasLocation() {
    return !!this.location;
  }

  getGretting() {
    let gretting = super.getGretting();

    if (this.hasLocation()) {
      gretting += ` I'm visiting from ${this.location}`;
    }

    return gretting;
  }
}

/*const me = new Student("John", 10, "Computer Science");
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());*/

const person1 = new Traveler("Mike", 12, "Bongora");
console.log(person1.getGretting());

const person2 = new Traveler("Mike", 14);
console.log(person2.getGretting());