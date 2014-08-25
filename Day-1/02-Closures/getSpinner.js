create an object and assign it to "spinner".  (The trick is in how you CREATE the object).
The object created is expected to exhibit the following behavior.

var spinner = //.....
spinner.up(); // =>1
spinner.up(); // =>2
spinner.up(); // =>3
spinner.up(); // =>4
spinner.up(); // =>5

spinner.down(); // =>4
spinner.down(); // =>3
spinner.down(); // =>2
spinner.down(); // =>1
spinner.down(); // =>0
spinner.down(); // =>-1

function getSpinner(){
	var counter = 0;
	function up(){
		return ++counter;
	}
	function down(){
		return --counter;
	}
	var result = {
		up : up,
		down : down
	}
	return result;
}