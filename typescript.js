/**
 * Returns the product of two numbers
 *
 * @param x - First input number
 * @param y - Second input number
 * @returns The product of 'x' and 'y', as a number
 *
 */
function getProduct(x, y) {
    return x * y;
}
var logIt = function (str) {
    console.log(str);
};
var firstMeal;
firstMeal = { entree: 'Waffle', dessert: 'Too much syrup' };
console.log(firstMeal.drink);
var secondMeal;
secondMeal = { entree: 'Hot Pocket', dessert: 'Cheesecake' };
var drink = 'drink';
secondMeal['drink'] = 'Slurp';
var thirdMeal = {
    entree: 'Chicken Nuggets',
    dessert: 'Tres Leches'
};
var fourthMeal = {
    entree: 'Tacos',
    dessert: 'Twizzlers'
};
fourthMeal.drink = 'Slurp';
function printMeal(_a) {
    var entree = _a.entree, dessert = _a.dessert, drink = _a.drink;
    console.log("I'm excited for my ".concat(entree, ", and my ").concat(dessert, "."));
    if (drink)
        console.log("Oh and my ".concat(drink, " too!"));
}
var poptartFlavors = ['Smores', 'Wild Berry', 'Strawberry'];
var numbersEndingInFive = [5, 15, 25, 55];
var meals = [
    firstMeal,
    secondMeal,
    thirdMeal,
];
meals.push(fourthMeal);
meals.forEach(function (meal) { return printMeal(meal); });
