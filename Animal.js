class Animal {
  constructor(name, dob, species) {
    this.name = name,
    this.dob = new Date(dob),
    this.species = species,
    this.noise = 'grunt'
  }

  speak() {
    return `${this.name} says ${this.noise}`
  }

  getAge() {
    let currDate = new Date();
    let currYear = currDate.getFullYear();
    return currYear - this.dob.getFullYear();
  }
}

class Dog extends Animal {
  constructor(name, dob, species) {
    super(name, dob, species)
    this.noise = 'woof'
  }
}

class Cat extends Animal {
  constructor(name, dob, species) {
    super(name, dob, species)
    this.noise = 'meow'
  }
}

class Bird extends Animal {
  constructor(name, dob, species) {
    super(name, dob, species)
    this.noise = 'tweet'
  }
}

module.exports = {Animal, Dog, Cat, Bird}