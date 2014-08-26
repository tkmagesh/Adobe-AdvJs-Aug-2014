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

var filter = function(list, criteriaFn){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (criteriaFn(list[i]) === true)
			result.push(list[i])
	return result;
}

var costlyProductCriteria = function(p){ return p.cost > 50; }
var allCostlyProducts = filter(products,costlyProductCriteria);
console.log("All costly products [cost > 50]");
console.table(allCostlyProducts);

//min
var min= function(list, selector){
	var selectorFn = selector;
	if (typeof selectorFn === "string")
		selectorFn = function(item){ return item[selector]};
	var result = selectorFn(list[0]);
	for(var i=1;i<list.length;i++){
		var value = selectorFn(list[i]);
		if (value < result) result = value;
	}
	return result;
}
console.log("Min cost = " ,min(products,"cost"));
console.log("Min product value = ", min(products, function(p){
	return p.cost * p.units;
}));

//max
//avg
//sum

//groupBy
var groupBy = function(list, selector){
	var selectorFn = selector;
	if (typeof selectorFn === "string")
		selectorFn = function(item){ return item[selector]};
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = selectorFn(list[i]);
		/*if (typeof result[key] === "undefined")
			result[key] = [];*/
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}

var every = function(list, predicate){
	for(var i=0;i<list.length;i++)
		if (!predicate(list[i]))
			return false;
	return true;
}

var some = function(list, predicate){
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]))
			return true;
	return false;
}

var forEach = function(list, fn){
	for(var i=0;i<list.length;i++)
		fn(list[i]);
}

var categories = [
	{id : 1, name : "stationary"},
	{id : 2, name : "grocery"}
]

var join = function(leftList, rightList, leftKeyName, rightKeyName, combinerFn){
	var result = [];
	for(var i=0;i<leftList.length;i++){
		var leftItem = leftList[i],
			leftKey = leftItem[leftKeyName];
		for(var j=0;j<rightList.length;j++){
			var rightItem = rightList[j],
				rightKey = rightItem[rightKeyName];
			if (leftKey === rightKey){
				var resultItem = combinerFn(leftItem, rightItem);
				result.push(resultItem);
			}
		}
	}
	return result;
}

console.log("Using join...");
var productsWithCategoryName = join(products,categories,"category","id", function(p,c){
  return { id : p.id, name : p.name, cost : p.cost, units : p.units, category : c.name };
});
console.table(productsWithCategoryName);


var map = function(list,fn){
	var result = [];
	for(var i=0;i<list.length;i++)
		result.push(fn(list[i]));
	return result;
}
console.table("Using map to transform the products..");
var newProductsWithDiscount = map(products,function(p){
	return {
		id : p.id,
		category : p.category,
		cost : p.category === 1 ? p.cost * 0.9 : p.cost
	};
});
console.table(newProductsWithDiscount);