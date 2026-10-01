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