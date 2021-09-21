
var result=0;

//dom variables
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var clear = document.getElementById("clear");
var square_root = document.getElementById("square-root");
var percent = document.getElementById("percent");
var sum = document.getElementById("sum");
var subtraction = document.getElementById("subtraction");
var multi = document.getElementById("multi");
var divide = document.getElementById("divide");
var dot = document.getElementById("dot");
var equal = document.getElementById("equal");


//this function clear result
function clear(){
  document.getElementId("result").value="";
  document.getElementId("operations").value="";
}
//this function show values
function show_values(){
  document.getElementId("result").value+=value;
}
//this function add values
function add(a,b){
  return a+b;
}
//this function multiplication values
function multiplication(a,b){
  return a*b;
}
//this function divide values
function divide(a,b) {
  return a/b;
}
//this function find percent values
function percent(a){
  return a/100;
}
//this function find square root values
function square_root(a){
  return Math.sqrt(a);
}


// Event lısteners
sum.onclick = function() {
  alert("calısıyor")
  

}
