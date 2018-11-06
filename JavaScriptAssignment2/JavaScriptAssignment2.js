function random(){
  var num = Math.round(Math.random()*10) ;
  return num;
}
var number = new Array();
number[0] = random();
number[1] = random();

function addition(a){
  var add = a[0] + a[1];
  return add;
}
function subtraction(b){
  var sub = b[0] - b[1];
  return sub;
}
function multiplication(c){
  var mult = c[0] * c[1];
  return mult;
}
function division(d){
  var divi = d[0] / d[1];
  return divi;
}
var de = document.getElementById("first");
de.textContent = addition(number);

var re = document.getElementById("second");
re.textContent = subtraction(number);

var me = document.getElementById("third");
me.textContent = multiplication(number);

var fa = document.getElementById("fourth");
fa.textContent = division(number);
