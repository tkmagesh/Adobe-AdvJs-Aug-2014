function getCachedFn(fn, context){
  var cache = {};
  return function(){
      var key = window.JSON.stringify(arguments);
      if (typeof cache[key] !== "undefined"){
         console.log("from cache..");
         return cache[key];
      }
      cache[key] = fn.apply(context,arguments);
      console.log("juz processed...");
      return cache[key];
  }
}

