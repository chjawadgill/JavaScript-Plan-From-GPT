let numbers = [45, 12, 78, 3, 90, 23];

// assume first value is highest and lowest
let highest = numbers[0];
let lowest = numbers[0];

// loop through array
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > highest) {
    highest = numbers[i];
  }

  if (numbers[i] < lowest) {
    lowest = numbers[i];
  }
}

console.log("Highest number:", highest);
console.log("Lowest number:", lowest);