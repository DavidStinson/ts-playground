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

console.log(firstMeal.drink)

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

type Meal = {
  entree: string
  dessert: string
  drink?: string
}

const poptartFlavors = ['Smores', 'Wild Berry', 'Strawberry']

const numbersEndingInFive: number[] = [5, 15, 25, 55]

const meals: { entree: string; dessert: string; drink?: string }[] = [
  firstMeal,
  secondMeal,
  thirdMeal,
]

meals.push(fourthMeal)


meals.forEach((meal): void => printMeal(meal))
