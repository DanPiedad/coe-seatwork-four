var coe = function(module1){

for(var i = 1; i < module1; i++){
	if (i % 3 === 0){
		console.log("Computer");
	}
	else if (i % 5 === 0){
		console.log("Engineering");
	}
	else if ((i % 3 === 0) && (i % 5 ===  0))
	{
		console.log("ComputerEngineering");
	}
	else{
		console.log(i);
	}
}
  
};
coe(100);