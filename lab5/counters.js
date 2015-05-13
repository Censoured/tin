"use strict"

function createCounters(n) {
	var result = [];
	for(var i=0; i<n; i++) {
	    result[i] = (function(i) {
			return function() { 
				return i;
			}
		})(i);
	}
	return result;
}

var counters = createCounters(1000);
console.log(counters[0]());
console.log(counters[10]());