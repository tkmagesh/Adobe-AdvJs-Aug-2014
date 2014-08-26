function Employee(id,name,salary){
	var _id = 0,
	    _name = "",
	    _salary = 0;

	if (this.constructor !== Employee)
    	return new Employee(id,name,salary);
	this.id = function(val){
   		if (typeof val === "undefined") return _id;
   		if (val > 0) _id = val;
	};
	this.name = function(val){
   		if (typeof val === "undefined") return _name;
   		if (val !== "") _name = val;
	};
	this.salary = function(val){
   		if (typeof val === "undefined") return _salary;
   		if (val > _salary) _salary = val;
	};
	this.id(id);
	this.name(name);
	this.salary(salary);
}
