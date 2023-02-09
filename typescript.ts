/**
 * Returns the product of two numbers
 *
 * @param x - First input number
 * @param y - Second input number
 * @returns The product of 'x' and 'y', as a number
 *
 */
function getProduct(x: number, y: number): number {
  return x * y
}

const logIt = (str: string): void => {
  console.log(str)
}

let firstMeal: Meal

firstMeal = { entree: 'Waffle', dessert: 'Too much syrup' }

let secondMeal: { entree: string; dessert: string }

secondMeal = { entree: 'Hot Pocket', dessert: 'Cheesecake' }

const drink = 'drink'

secondMeal['drink'] = 'Slurp'

const thirdMeal: Meal = {
  entree: 'Chicken Nuggets',
  dessert: 'Tres Leches',
}

const fourthMeal: Meal = {
  entree: 'Tacos',
  dessert: 'Twizzlers',
}

fourthMeal.drink = 'Slurp'

function printMeal({ entree, dessert, drink }: Meal): void {
  console.log(`I'm excited for my ${entree}, and my ${dessert}.`)
  if (drink) console.log(`Oh and my ${drink} too!`)
}

interface Meal {
  entree: string
  dessert: string
  drink?: string
  price?: string | number
}

interface Meal {
  price?: string | number
}

const poptartFlavors = ['Smores', 'Wild Berry', 'Strawberry']

const numbersEndingInFive: number[] = [5, 15, 25, 55]

const meals: { entree: string; dessert: string; drink?: string }[] = [
  firstMeal,
  secondMeal,
  thirdMeal,
]

meals.push(fourthMeal)

const myArray = []

const greatCoffee = {
  brand: 'Onyx',
  variety: 'Geometry',
  isTasty: true,
}

const mehCoffee = {
  brand: 'Green Mountain',
  variety: 'Half-caff K-Cup',
  isTasty: false,
}

let greatCoffeeTuple: [string, string, boolean]

greatCoffeeTuple = ['Onyx', 'Geometry', true]

type Coffee = [string, string, boolean]

const mehCoffeeTuple: Coffee = ['Green Mountain', 'Half-caff K-Cup', false]

let myLicenseId: string | number

myLicenseId = 'k7981741'
renewLicense(myLicenseId) // OK
myLicenseId = 59298114
renewLicense(myLicenseId) // OK
// Error: Argument of type 'boolean' is not assignable to parameter of
// type 'string | number'.

function renewLicense(licenseId: string | number): void {
  if (typeof licenseId === 'string') {
    licenseId = licenseId.toUpperCase()
  }
  console.log(`License #${licenseId} has been renewed`)
}

const numBoolArr: (boolean | number)[] = [false, 1, 3, true, 5]

const theLetterH: 'H' = 'H'
const zero: 0 = 0

enum PossibleDuckColors {
  Purple = 'Purple',
  Pink = 'Pink',
  Green = 'Green',
  Blue = 'Blue',
}

type DuckDogToy = {
  isFavorite: boolean
  color: PossibleDuckColors
}

const purpleDuck: DuckDogToy = {
  isFavorite: true,
  color: PossibleDuckColors.Purple,
}

console.log(purpleDuck)

enum Roles {
  NewUser = 50,
  Student = 100,
  TA = 200,
  IA = 400,
  Instructor = 700,
  Admin = 900,
}

const myRole = 900

function checkAdmin(role: number): void {
  if (role >= Roles.Admin) {
    console.log('Welcome, admin.')
  } else {
    console.log('Whatchu want, pleb?')
  }
}

checkAdmin(myRole)

const newUserRole = Roles.NewUser

console.log(newUserRole)

checkAdmin(newUserRole)

interface Emote {
  speak: () => string
}

interface Dog extends Emote {
  readonly name: string
  favToy?: string
  age: number
  walk: (distance: number) => void
}

const myDog: Dog = {
  name: 'Cooper',
  age: 7,
  speak: function (): string {
    return 'bark!'
  },
  walk: function (distance: number): void {
    console.log(`You walked ${this.name} ${distance} mile(s)!`)
  },
}

const printSpeech = (entity: Emote): void => {
  console.log(entity.speak())
}

interface TalkingToy extends Emote {
  isFuzzy: boolean
}

interface Person extends Emote {
  hairColor: string
}

interface Instructor extends Person {
  favoriteUnit: 1 | 2 | 3 | 4
}

const woody: TalkingToy = {
  isFuzzy: false,
  speak: function (): string {
    return "There's a snake in my boot!"
  },
}

const furby: TalkingToy = {
  isFuzzy: false,
  speak: function (): string {
    return 'You feed me, blehaha blehaha.'
  },
}

const taylorSwift: Person = {
  hairColor: 'blonde',
  speak: function (): string {
    return 'Shake it off!'
  },
}

const ben: Instructor = {
  hairColor: 'Salt-n-Pepper',
  favoriteUnit: 2,
  speak: function (): string {
    return 'Eeee-yaaaaaaaa *this is the sound of a tarantula bat*'
  },
}

printSpeech(myDog)
printSpeech(taylorSwift)
printSpeech(woody)
printSpeech(furby)
printSpeech(ben)

class Cat {
	constructor(public name: string, public age: number) {}

  describe(): string {
		return `This is ${this.name}, they are ${this.age} years old.`
  }

	createdAt = new Date();
}

class Kitten extends Cat {
  constructor(name: string, age: number, public favToy: string) {
    super(name, age)
  }

  describe(): string {
		return super.describe() + ` Their favorite toy is a ${this.favToy}.`
  }
}

// class Kitten extends Cat {
// 	constructor(name: string, age: number, favToy: string) {
// 		super(name, age)
//     this.favToy = favToy
// 	}
//   public favToy: string
// }

let kitten = new Kitten('Xbox', 1, 'string')

console.log(kitten)
console.log(kitten.describe());

