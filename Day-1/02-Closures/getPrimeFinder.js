PrimeFinder
 - it is a function to check if the given number is a prime number or not
 - the function should cache the results and return the result from the cache if it is already cached

 function getPrimeFinder(){
 	var cache = {};
 	function isPrime(n){
 		if (n <= 3 ) return true;
 		for(var i=2;i<= (n/2);i++)
 			if (n % i === 0) return false;
 		return true; 
 	}
 	function primeFinder(n){
 		if (typeof cache[n] !== "undefined"){
 			console.log("from cache...");
 			return cache[n];
 		}
 		console.log("juz processed...");
 		cache[n] = isPrime(n);
 		return cache[n];
 	}
 	return primeFinder;
 }