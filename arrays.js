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