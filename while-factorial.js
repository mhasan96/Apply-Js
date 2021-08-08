// normal while loop factorial

// function factorial(number) {
//   var fact = 1;
//   var i = 1;
//   while (i <= number) {
//     fact = fact * i;
//     i++;
//   }
//   return fact;
// }

// var firstNumber = factorial(7);
// console.log(firstNumber);

// Reverse While

function factorial(number) {
  let fact = 1;
  let i = number;
  while (i >= 1) {
    fact = fact * i;
    i--;
  }
  return fact;
}

var firstFactorial = factorial(7);
console.log(firstFactorial);
