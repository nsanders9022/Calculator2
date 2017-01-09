var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2){
	return number1 - number2;
};

var multiply = function(number1, number2){
	return number1 * number2;
};

var divide = function(number1, number2){
	return number1 / number2;
};

var bmi = function(number1, number2) {
  var weight = number1 * 0.45;
  var height = (number2 * 0.025);
  var heightconvert = height * height;
  return weight / heightconvert;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter a second number:"));

var result = bmi(number1, number2);
alert(result);
