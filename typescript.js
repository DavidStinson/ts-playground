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
var myArray = [];
var greatCoffee = {
    brand: 'Onyx',
    variety: 'Geometry',
    isTasty: true
};
var mehCoffee = {
    brand: 'Green Mountain',
    variety: 'Half-caff K-Cup',
    isTasty: false
};
var greatCoffeeTuple;
greatCoffeeTuple = ['Onyx', 'Geometry', true];
var mehCoffeeTuple = ['Green Mountain', 'Half-caff K-Cup', false];
var myLicenseId;
myLicenseId = 'k7981741';
renewLicense(myLicenseId); // OK
myLicenseId = 59298114;
renewLicense(myLicenseId); // OK
// Error: Argument of type 'boolean' is not assignable to parameter of 
// type 'string | number'.
function renewLicense(licenseId) {
    if (typeof licenseId === 'string') {
        licenseId = licenseId.toUpperCase();
    }
    console.log("License #".concat(licenseId, " has been renewed"));
}
var numBoolArr = [false, 1, 3, true, 5];
var theLetterH = "H";
var zero = 0;
var PossibleDuckColors;
(function (PossibleDuckColors) {
    PossibleDuckColors["Purple"] = "Purple";
    PossibleDuckColors["Pink"] = "Pink";
    PossibleDuckColors["Green"] = "Green";
    PossibleDuckColors["Blue"] = "Blue";
})(PossibleDuckColors || (PossibleDuckColors = {}));
var purpleDuck = {
    isFavorite: true,
    color: PossibleDuckColors.Purple
};
console.log(purpleDuck);
var Roles;
(function (Roles) {
    Roles[Roles["NewUser"] = 50] = "NewUser";
    Roles[Roles["Student"] = 100] = "Student";
    Roles[Roles["TA"] = 200] = "TA";
    Roles[Roles["IA"] = 400] = "IA";
    Roles[Roles["Instructor"] = 700] = "Instructor";
    Roles[Roles["Admin"] = 900] = "Admin";
})(Roles || (Roles = {}));
var myRole = 900;
function checkAdmin(role) {
    if (role >= Roles.Admin) {
        console.log("Welcome, admin.");
    }
    else {
        console.log("Whatchu want, pleb?");
    }
}
checkAdmin(myRole);
var newUserRole = Roles.NewUser;
console.log(newUserRole);
checkAdmin(newUserRole);
var myDog = {
    name: 'Cooper',
    age: 7,
    speak: function () {
        return "bark!";
    },
    walk: function (distance) {
        console.log("You walked ".concat(this.name, " ").concat(distance, " mile(s)!"));
    }
};
var printSpeech = function (entity) {
    console.log(entity.speak());
};
var woody = {
    isFuzzy: false,
    speak: function () {
        return "There's a snake in my boot!";
    }
};
var furby = {
    isFuzzy: false,
    speak: function () {
        return "You feed me, blehaha blehaha.";
    }
};
var taylorSwift = {
    hairColor: "blonde",
    speak: function () {
        return "Shake it off!";
    }
};
var ben = {
    hairColor: "Salt-n-Pepper",
    favoriteUnit: 2,
    speak: function () {
        return "Eeee-yaaaaaaaa *this is the sound of a tarantula bat*";
    }
};
printSpeech(myDog);
printSpeech(taylorSwift);
printSpeech(woody);
printSpeech(furby);
printSpeech(ben);
