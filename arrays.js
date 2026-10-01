// Task 1
let favoriteCities = ["Seattle", "Chicago", "Victoria", "Vancouver", "Portland"];

/*
Expected Output:
SEATTLE
CHICAGO
VICTORIA
VANCOUVER
PORTLAND
*/

favoriteCities.forEach((city)=>{
    console.log(city.toUpperCase());
});

// Task 2
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((number)=>number * number);

// Expected Output: [1, 4, 9, 16, 25]

console.log(squares);

// Task 3
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);

// Expected Output: [85, 90, 100];

console.log(highScores);

// Task 4
let favoriteFood = ["Pizza", "Chopped Cheese", "Salmon Teriyaki", "Sushi", "Fish & Chips"];
let firstGreaterThanFourLetterFood = favoriteFood.find(food => food.length > 4);
let firstGreaterThanFourLetterFoodIndex = favoriteFood.findIndex(food => food.length > 4);

/*
Expected Output:
Pizza
0
*/

console.log(firstGreaterThanFourLetterFood);
console.log(firstGreaterThanFourLetterFoodIndex);

// Task 5
let temperatures = [61, 66, 64, 65, 70];
let someAboveNinety = temperatures.some(temperature => temperature > 90);
let everyAboveFifty = temperatures.every(temperature => temperature > 50);

// Expected Output: [false, true]

console.log([someAboveNinety, everyAboveFifty]);

// Task 6
let totalBudget = 100.00;
let prices = [20.25, 30.00, 10.75, 5.00];

let leftoverBudget = prices.reduce((total, price) => total - price, totalBudget);

// Expected Output: $34

console.log(`$${leftoverBudget}`);