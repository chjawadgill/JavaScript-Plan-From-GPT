let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;
let guess = 7;

while (attempts > 0) {
  guess = Number("You Number Atempts left:" , +attempts)

  if (guess === randomNumber) {
    console.log("You won!");
    break;
  }

  attempts--;

  if (attempts === 0) {
    console.log("Game over! Number was " + randomNumber);
  }
}
