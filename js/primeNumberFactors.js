//the complexity is O(n), a number can't be divisible by half of its value, so do not need to loop 50%.
// a number could be divisible by numbers 1/3 of its value.


function primeFactory(num){
    var primes = [];
	var divisor = 2;
    while(2 < num){
    	if(num % divisor == 0 ){
        	primes.push(divisor);
            num = num / divisor;
        }
        else{
        	divisor++;
        }
    }
    return primes;
}


console.log(primeFactory(69));
