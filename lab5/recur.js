"use strict";
var factorial = cached([1], function (recur, n) {
    return recur(n - 1) *n;
});

var fibonacci = cached([0, 1], function (recur, n) {
    return recur(n - 1) + recur(n - 2);
});

function cached(cache, fun) {
    var recur = function func (n) 
	{
        if(cache[n] !== undefined) return cache[n];
        cache[n] = fun(func, n);
        return cache[n];
    }
    return recur;
}

console.log(factorial(5));
console.log(fibonacci(7));