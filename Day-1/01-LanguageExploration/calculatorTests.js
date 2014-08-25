window.addEventListener("DOMContentLoaded",runTests);
function runTests(){
	test("Should be able to add two numbers", function(){
		//Arrange
		var number1 = 10,
			number2 = 20,
			expectedResult = 30;

		//Act
		var actualResult = add(number1,number2);

		//Assert
		return actualResult === expectedResult;
	});
/*
	test("Should be able to add two numbers in string format", function(){
		//Arrange
		var number1 = "10",
			number2 = "20",
			expectedResult = 30;

		//Act
		var actualResult = add(number1,number2);

		//Assert
		return actualResult === expectedResult;
	});

	test("Should be able to treat non numeric strings as zero", function(){
		//Arrange
		var number1 = 10,
			number2 = "abc",
			expectedResult = 10;

		//Act
		var actualResult = add(number1,number2);

		//Assert
		return actualResult === expectedResult;
	});

	test("Should act on only one argument", function(){
		//Arrange
		var number1 = 10,
			expectedResult = 10;

		//Act
		var actualResult = add(number1);

		//Assert
		return actualResult === expectedResult;
	});

	test("Should return zero for no arguments", function(){
		//Arrange
		var expectedResult = 0;

		//Act
		var actualResult = add();

		//Assert
		return actualResult === expectedResult;
	});

	test("Should be able to add varying length of arguments", function(){
		//Arrange
		var	expectedResult = 100;

		//Act
		var actualResult = add(10,20,30,40);

		//Assert
		return actualResult === expectedResult;
	});

	test("Should be able to add functions returning numbers", function(){
		//Arrange
		var f1 = function(){ return 10;},
			f2 = function(){ return 20;};
		var	expectedResult = 30;

		//Act
		var actualResult = add(f1,f2);

		//Assert
		return actualResult === expectedResult;
	});

	test("Should be able to add functions returning numbers in string format", function(){
		//Arrange
		var f1 = function(){ return 10;},
			f2 = function(){ return "20";};
		var	expectedResult = 30;

		//Act
		var actualResult = add(f1,f2);

		//Assert
		return actualResult === expectedResult;
	});

	test("Should be able to add functions returning functions returning numbers in string format", function(){
		//Arrange
		var f1 = function(){ return function(){ return 10;}},
			f2 = function(){ return function(){ return "20";}};
		var	expectedResult = 30;

		//Act
		var actualResult = add(f1,f2);

		//Assert
		return actualResult === expectedResult;
	});

	test("Should be able to array of numbers", function(){
		//Arrange
		var numbers1 = [10,30],
			numbers2 = [20,40],
			expectedResult = 100;

		//Act
		var actualResult = add(numbers1,numbers2);

		//Assert
		return actualResult === expectedResult;
	});

	test("Should be able to nested array of numbers", function(){
		//Arrange
		var numbers = [10,[20,[30,[40]]]],
			expectedResult = 100;

		//Act
		var actualResult = add(numbers);

		//Assert
		return actualResult === expectedResult;
	});

	test("Should be able to add functions returning functions returning array of numbers and numbers in string format", function(){
		//Arrange
		var f1 = function(){ return function(){ return [10,30];}},
			f2 = function(){ return function(){ return ["20",40];}};
		var	expectedResult = 100;

		//Act
		var actualResult = add(f1,f2);

		//Assert
		return actualResult === expectedResult;
	});

	test("Should be able to add array of functions returning functions returning array of numbers and numbers in string format", function(){
		//Arrange
		var f1 = function(){ return function(){ return [10,30];}},
			f2 = function(){ return function(){ return ["20",40];}};
		var	expectedResult = 100;

		//Act
		var actualResult = add([f1,f2]);

		//Assert
		return actualResult === expectedResult;
	});
*/

}