//exercise 1 
function ex1(a, b) {
  if (a === b) {
    return 3 * (a + b);
  }
  else {
    return a + b;
  }
}
console.log("Ket qua bai 1: " + ex1(5, 10));
console.log("Ket qua bai 1: " + ex1(5, 5));
//exercise 2
function ex2(x) {
  if (x <= 19) {
    return 19 - x;
  }
  else {
    return (x - 19) * 3
  }
}
console.log("Ket qua bai 2: " + ex2(12));
console.log("Ket qua bai 2: " + ex2(19));
console.log("Ket qua bai 2: " + ex2(22));
//exercise 3
function ex3(num) {
  var arr = [];
  var index = num.indexOf("*");
  var number = num.split('');
  number.splice(index, 1)
  for (var i = 0; i <= 9; i++) {
    number = num.replace('*', i);
    if (number % 3 === 0) arr.push(number);
  }
  return arr;
}
console.log('Ket qua bai 3: ' + ex3('1*9'));
console.log('Ket qua bai 3: ' + ex3('1234567890*'));
//exercise 4
function ex4(num) {
  var number1 = ex3(num);
  var Array = [];
  for (var i = 0; i < number1.length; i++) {
    var finalNumber = number1[i].charAt(number1[i].length - 1);
    if (finalNumber % 2 === 0) {
      Array.push(number1[i]);
    }
  }
  return Array;
}
console.log("Ket qua bai 4 : " + ex4('1*9'));
console.log("Ket qua bai 4 : " + ex4('1234567890*'));
