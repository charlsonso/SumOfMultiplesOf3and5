function sum(n){
	total = 0;
	for(i = 0; i<n; i++){
		if (i%3==0||i%5==0){
			total+=i;
		}
	}
	return total;
}

function showSum(){
	var output = document.getElementById('textSol');
	output.value = sum(document.getElementById('textInput').value);
}