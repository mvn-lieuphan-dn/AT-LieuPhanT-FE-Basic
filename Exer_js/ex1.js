//exercise 1 
function ex1 (a, b){
  var c = (a === b) ? 3 * (a + b) : (a + b);
  return c;
}
console.log("ket qua cau 1: " + ex1(5,10));

//exercise 2
function ex2 (x){
if(x <= 19) {
  return 19 -x ;
}
else {
  return (x - 19)* 3
}
}
console.log("ket qua bai 2: "+ ex2(22));

//exercise 3
function ex3(num){
  var arr = [];
  var index = num.indexOf("*");
  var number = num.split('');
  number.splice(index , 1)
  for(let i = 0; i <= 9 ; i++){
    number = num.replace('*' , i);
    if(number % 3 === 0) arr.push(number);
  } 
  return arr;
}
console.log('ket qua bai 3: ' + ex3('1*9'));
//exercise 4
function ex4(num){
  var number1 = ex3(num);
  var Array = [];
  for(let i = 0; i < number1.length; i++){
    if(number1[i]%2 === 0){
      Array.push(number1[i]);
    }
  }
  return Array;
}
console.log("ket qua bai 4 : " + ex4('1234567890*'));


