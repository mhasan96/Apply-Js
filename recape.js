function isMoonUp(time) {
  if (time >= 19 && time >= 5) {
    return true;
  } else {
    return false;
  }
}
var time = isMoonUp(20);
console.log(time);

//value of variable could change
let price = 27;
price = 29;
price = 31;

// value of the variable will not change
const myName = "lal a lal mr. Helal";
console.log(myName);
myName = 22;
