//Calculator functions
var add = function(number1, number2){
	var result = number1 + number2;
	return result;
};

var subtract = function(number1, number2){
	var result = number1 - number2;
	return result;
};

var multiply = function(number1, number2){
	var result = number1 * number2;
	return result;
};

var divide = function(number1, number2){
	var result = number1 / number2;
	return result;
};

//User Interface
$(document).ready(function(){
	$("form#math").submit(function(event){
		var number1Input = parseFloat($("input#number1").val());
		var number2Input = parseFloat($("input#number2").val());

		if ($("input:radio[name=operator]:checked").val() === "add"){
			result = add(number1Input,number2Input);
		} else if ($("input:radio[name=operator]:checked").val() === "subtract"){
			result = subtract(number1Input,number2Input)
		} else if ($("input:radio[name=operator]:checked").val() === "multiply"){
			result = multiply(number1Input,number2Input)
		} else if ($("input:radio[name=operator]:checked").val() === "divide"){
			result = divide(number1Input,number2Input)
		}


		$(".output").text(result);
		event.preventDefault();
	});

});



// var bmi = function(number1, number2) {
//   var weight = number1 * 0.45;
//   var height = (number2 * 0.025);
//   var heightconvert = height * height;
//   return weight / heightconvert;
// };
//
// var temp = function(number1) {
//   return number1 * 1.8 + 32
// }
//
// var gallonsToLiters = function (number1) {
//   return number1 * 3.785411784;
// }
//
// var gallonsToQuarts = function (number1) {
//   return number1 * 4;
// }
//
// var quartsToPint = function (number1) {
//   return number1 * 2;
// }
//
// var pintToCup = function (number1) {
//   return number1 * 1.97157;
// }
//
// var cupToFluidOz = function (number1) {
//   return number1 * 8.11537;
// }
