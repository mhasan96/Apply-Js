// var factorialStore = 1;
// function factorial(number) {
//   for (var i = 1; i <= number; i++) {
//     factorialStore = factorialStore * i;
//   }
//   return factorialStore;
// }

// var number = factorial(7);
// console.log(factorialStore);

// Function Factorial

function factorial(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
}

var firstFactorial = factorial(7);
console.log("factorial of 7 is", firstFactorial);
var secondFactorial = factorial(9);
console.log("factorial of 7 is", secondFactorial);
