// ======================
//      VARIABLES
// ======================
// veggie = "carrot"
// veggie = "onion"
let veggie = 'carrot';
veggie = 'onion';
console.log(veggie);
//
//
// =========================
//      DATA STRUCTURES
// =========================

// animals = ["tiger", "panda", "raccoon"]
// animals.append("opossum")

// dog = {"name": "Sprinkles", "age": 3}
// dog["is_friendly"] = True
let animals = ['tiger', 'panda', 'raccoon'];
animals.push('opossum');

let dog = {'name': 'Sprinkles', 'age': 3};
dog.isFriendly = true;

console.log(animals);
console.log(dog);

//
//
// =================
//       LOOPS
// =================

// num = 5
// for i in range(num):
//    print(i)



for (let i = 1; i < 5;i ++){
  console.log(i);
}

// for animal in animals:
//    print(animal)
for (const animal of animals){
  console.log(animal);
}
// for k, v in dog.items():
//    print(f"{k}: {v}")

for(const [k,v] of Object.entries(dog)){
  console.log(`${k}: ${v}`);
}
//
//
// ===================================
//       FUNCTIONS / CONDITIONALS
// ===================================

// def fizzbuzz(num):
//    if num % 3 == 0 and num % 5 == 0:
//        return "fizzbuzz"
//    elif num % 3 == 0:
//        return "fizz"
//    elif num % 5 == 0:
//        return "buzz"
//    else:
//        return num

// Old way: Function Declaration
// function fizzBizz(num) {
//   if (num % 3 === 0 && num % 5 === 0){
//     return 'fizzbuzz';
//   } else if (num % 3 === 0) {
//     return 'fizz';
//   } else if (num % 5 === 0) {
//     return 'buzz';
//   } else {
//     return num;
//   }
// }

// ES6 way: Function Expression
const fizzBizz = function (num) {
  if (num % 3 === 0 && num % 5 === 0){
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
}
//
//
// ======================
//       CLASSES
// ======================

// class Animal:
//    def __init__(self,species,name):
//        self.species = species
//        self.name = name
//
//    def __str__(self):
//        return f"{self.name} is a {self.species}"

class Animal {
    constructor(species, name) {
        this.species = species;
        this.name = name;
    }

    toString() {
        return `${this.name} is a ${this.species}`;
    }
}

// class Dog(Animal):
//    def __init__(self, name, trick):
//        super().__init__(species="dog", name=name)
//        self.trick = trick
//
//    def __str__(self):
//        return f"{super().__str__()} that can {self.trick}"


//  class ChildClass extends ParentClass {
//       constructor(parentAttribute, childAttribute) {
//         super(parentAttribute); // Call parent constructor to inherit parentAttribute
//         this.childAttribute = childAttribute;
//       }
//     }
class Dog extends Animal {
  constructor(name, trick) {
    super('dog', name);
    this.trick = trick;
  }

  toString() {
    return `${super.toString()} that can ${this.trick}`;
  }
}
const littledog = new Dog('Shadow', 'play dead');
console.log(littledog.toString());



