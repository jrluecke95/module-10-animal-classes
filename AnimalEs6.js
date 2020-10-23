class Animal {
  constructor(name, birthdate, species) {
    this.name = name;
    this.birthdate = new Date(birthdate);
    this.species = species;
    this.noise = 'grunt';
  }

  getAge() {
    let day = new Date();
    let actualAge = Math.abs(this.birthdate.getFullYear() - day.getFullYear());
    return actualAge;
  }

  speak() {
      console.log(`${this.name}, the ${this.getAge()} year old ${this.species}, says ${this.noise}!`);
  }
}

class Dog extends Animal {
  constructor(name, birthdate, species) {
    super(name, birthdate, species)

    this.noise = 'woof';
  }
}

module.exports = { Animal, Dog };