"use strict"
var obj = {
	className: 'first bordered'
}

function addClassName(array, name) {
	var buffer = array.className.split(" ");
	var result = true;
	for(var i=0; i<buffer.length; i++) {
		if(buffer[i]==name) {
			result = false;
		}
	}
	if(result == true) {
		array.className +=" "+name; 
	}
}
addClassName(obj, "visible")
console.log(obj.className)
addClassName(obj, "visible")
console.log(obj.className)