function bindThis(fn, obj){
    return function(){
       debugger;
       return fn.apply(obj,arguments);
    }
}