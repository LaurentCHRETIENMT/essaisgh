var f=function(x,y){
	console.log("args : "+arguments.length);
	//var args = Array.prototype.slice.call(arguments);
	var args = arguments;
	for(var a in args)
		{ console.log("arg = "+ a + " value : "+args[a]);};
	
	console.log( [1000,2000,3000].slice(0));
}

f(100,200);