var products = [
	{id :8, name :"Pen", cost : 70, units : 20, category : 1},
	{id :3, name :"Hen", cost : 40, units : 80, category : 2},
	{id :6, name :"Ten", cost : 90, units : 40, category : 1},
	{id :2, name :"Len", cost : 30, units : 20, category : 2},
	{id :1, name :"Ken", cost : 60, units : 60, category : 2},
	{id :5, name :"Zen", cost : 20, units : 50, category : 1}
]
console.log("Default list...");
console.table(products);

var sort = function(list){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (list[i].id > list[j].id){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

console.log("After sorting by id [default]");
sort(products);
console.table(products);

var sort = function(list, attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (list[i][attrName] > list[j][attrName]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

console.log("After sorting by cost");
sort(products, "cost");
console.table(products);

console.log("After sorting by units");
sort(products, "units");
console.table(products);

var sort = function(list, comparerFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (comparerFn(list[i],list[j]) > 0){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

var productComparerByValue = function(p1, p2){
	var p1Value = p1.units * p1.cost,
		p2Value = p2.units * p2.cost;
	if (p1Value < p2Value) return -1;
	if (p1Value > p2Value) return 1;
	return 0;
}

console.log("After sorting by value [using the comparerFn]");
sort(products,productComparerByValue);
console.table(products);

var inverseComparer = function(comparerFn){
	return function(p1,p2){
		return comparerFn(p1,p2) * -1;
	}
}

console.log("After sorting by value - descending [using the inverseComparer]");
var productComparerByValueDesc = inverseComparer(productComparerByValue);
sort(products,productComparerByValueDesc);
console.table(products);

