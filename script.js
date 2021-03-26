const fs = require('fs');
const { Animal, Dog, Cat, Bird } = require('./Animal.js')

//question 1 and 2: passing arguments and reading file contents
const content = fs.readFileSync(process.argv[2], 'utf-8');

// Question 3: splitting string into array
let data = content.split('\n');
data.shift();
data = data.map(item => item.slice(1, -1).split('","'))

let animals = data.map((animal) => {
  switch (animal[2]) {
    case 'dog':
      return new Dog(animal[0], animal[1], animal[2])
    case 'cat':
      return new Cat(animal[0], animal[1], animal[2])
    case 'bird':
      return new Bird(animal[0], animal[1], animal[2])
    default:
      return new Animal()
  }
})

animals.forEach(animal => {
  const animalSpeak = animal.speak()
  animal.speak = animalSpeak
  const animalAge = animal.getAge()
  animal.animalAge = animalAge
})


const groupedAnimals = {};
animals.forEach(animal => {
  if (!groupedAnimals[animal.species]) {
    groupedAnimals[animal.species] = [];
  }
  groupedAnimals[animal.species].push(animal)
})

const species = Object.keys(groupedAnimals);

species.sort((a, b) => {
  return groupedAnimals[a].length < groupedAnimals[b].length ? 1 : -1
})

const mostFreqGroup = groupedAnimals[species[0]]

mostFreqGroup.sort((a, b) => {
  if (a.dob === b.dob) {
    return 0
  } else if (a.dob < b.dob) {
    return -1
  } else {
    return 1
  }
})

console.log(mostFreqGroup[0])