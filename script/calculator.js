//dom variables
var result = document.getElementById("result");
var operations = document.getElementById("operations");
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

// Container varialbes
var equation = "";

// Event lısteners
one.onclick = function() {
  equation += "1";
  operations.innerHTML = equation;
}

two.onclick = function() {
  equation += "2";
  operations.innerHTML = equation;
}

three.onclick = function() {
  equation += "3";
  operations.innerHTML = equation;
}

four.onclick = function() {
  equation += "4";
  operations.innerHTML = equation;
}

five.onclick = function() {
  equation += "5";
  operations.innerHTML = equation;
}

six.onclick = function() {
  equation += "6";
  operations.innerHTML = equation;
}

seven.onclick = function() {
  equation += "7";
  operations.innerHTML = equation;
}

eight.onclick = function() {
  equation += "8";
  operations.innerHTML = equation;
}

nine.onclick = function() {
  equation += "9";
  operations.innerHTML = equation;
}

zero.onclick = function() {
  equation += "0";
  operations.innerHTML = equation;
}

sum.onclick = function() {
  equation += "+";
  operations.innerHTML = equation;
}

percent.onclick = function() {
  equation += "%";
  operations.innerHTML = equation;
}

subtraction.onclick = function() {
  equation += "-";
  operations.innerHTML = equation;
}

multi.onclick = function() {
  equation += "*";
  operations.innerHTML = equation;
}

divide.onclick = function() {
  equation += "/";
  operations.innerHTML = equation;
}

dot.onclick = function() {
  equation += ".";
  operations.innerHTML = equation;
}

equal.onclick = function() {
  dom_result = eval(equation);
  result.innerHTML = dom_result;
  equation = "";
}

clear.onclick = function(){
  operations.innerHTML = equation;
  result.innerHTML = "0";
  equation = "";
}
